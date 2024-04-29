import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;


//checking if the oppenai key is set
if (!apiKey) {
    throw Error("OPENAI_API_KEY is not set");
}

const openai = new OpenAI({ apiKey })

export default openai;


//the text will be assigned to cbeinfo endpoints
export async function getCbeinfoEmbedding(text: string) {
    const response = await openai.embeddings.create(
        {
            model: "text-embedding-ada-002",
            input: text,
        }
    )

    const embedding = response.data[0].embedding;
    if (!embedding) {
        throw Error("Error generating embedding.");
    }

    console.log(embedding);
    return embedding;
}