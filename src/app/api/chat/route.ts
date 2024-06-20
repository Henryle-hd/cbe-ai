import { cbeinfoIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import openai, { getCbeinfoEmbedding } from "@/lib/openia";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import fetch from "node-fetch";

export async function POST(req: Request) {
  //getting system prompt from "/api/training"
  const systemPromptResponse = await fetch(
    "https://cbe-ai.vercel.app/api/training",
  );
  const systemPrompt = await systemPromptResponse.text();
  console.log(systemPrompt);

  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
    const messageTruncated = messages.slice(-6);

    const embedding = await getCbeinfoEmbedding(
      messageTruncated.map((message) => message.content).join("\n"),
    );

    /*
        Example:
        user: Hey, list all cbe compansies
        chatbot: CBE comapnies include: Dar, Dodoma,....
        user: Thanks!, list all courses
        chatbot: .........
        */

    //searching
    const vectorQueryResponse = await cbeinfoIndex.query({
      vector: embedding,
      topK: 4,
    });

    //getting text info
    const relevantCbeInfo = await prisma.info.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });

    //testing
    console.log("Relevant CBE info:", relevantCbeInfo);

    const systemMessage: ChatCompletionMessage = {
      role: "assistant",
      content:
        systemPrompt +
        "The relevant CBE inforamation for this query are: \n" +
        relevantCbeInfo
          .map(
            (info) => `Title ${info.title}\n\nMain body:\n ${info.main_body}`,
          )
          .join("\n\n"),
    };

    /* sample of above code:
        Title: CBE Dar es Salaam
        Main body:
        Dar es Salaam College of Busineess .........
        */

    //Request to openai(chatGPT)
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messageTruncated],
    });

    //return the result to fontEnd
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
