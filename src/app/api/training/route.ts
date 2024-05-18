import prisma from "@/lib/db/prisma";
export async function GET(req: Request) {
    try {
        const info = await prisma.info.findMany();
        const systemPrompt =
        "Your CBE(College of Business Education) assistant chatbot named cbeai. You answer the user's (student, lectures, potential applicator, etc.) questions based on the existing information. Note: Your not allowed to provide information that is not relevant to CBE but you can provide staff/customer service number/email. Good luck! " +
        "The relevant CBE information for this query are: \n" +
        info
            .map((info) => `Title ${info.title}\n\nMain body:\n ${info.main_body}`)
            .join("\n\n");

        return new Response(systemPrompt);
    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 });
    }
}
