import prisma from "@/lib/db/prisma";
import { addInfoSchema } from "@/lib/validation/cbeinfo";
import { auth } from "@clerk/nextjs";

export async function POST(req:Request){
    try {
        const body = await req.json();
        
        const parseResult = addInfoSchema.safeParse(body);
        
        if (!parseResult.success) { 
            console.error(parseResult.error);
            return Response.json({error: "Invalid info provided"}, {status: 400});
        }


        const { title, main_body } = parseResult.data; // Destructure validated data
        
        const { userId} = auth();
        
        if (!userId) {
            return Response.json(
                { error: "Unauthorized" },
                { status: 401 }
            )
        }

        const info = await prisma.info.create({
            data: {
                title,
                main_body,

    }
})

        return Response.json({info}, {status: 201});
    } catch (error) {
        console.error(error);
        return Response.json({error:"Internal server error"},{status:500});
    }
}