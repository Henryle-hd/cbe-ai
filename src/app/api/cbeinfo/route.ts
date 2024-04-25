import prisma from "@/lib/db/prisma";
import { addInfoSchema, deleteInfoSchema, updateInfoSchema } from "@/lib/validation/cbeinfo";
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


export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const parseResult = updateInfoSchema.safeParse(body);

        if (!parseResult.success) {
          console.error(parseResult.error);
          return Response.json(
            { error: "Invalid info provided" },
            { status: 400 },
          );
        }

        const { id, title, main_body } = parseResult.data; // Destructure validated data
        const info = await prisma.info.findUnique({ where: { id } })

        if (!info) {
            return Response.json({ error: "Info not found" }, { status: 404 });
        }

        const { userId } = auth();
        if (!userId) {
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const updatedInfo=await prisma.info.update({
            where: { id },
            data: {
                title,
                main_body,
            },
        })
return Response.json({updatedInfo}, {status: 200});
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const parseResult = deleteInfoSchema.safeParse(body);

        if (!parseResult.success) {
          console.error(parseResult.error);
          return Response.json(
            { error: "Invalid info provided" },
            { status: 400 },
          );
        }

        const { id } = parseResult.data; // Destructure validated data
        const info = await prisma.info.findUnique({ where: { id } })

        if (!info) {
            return Response.json({ error: "Info not found" }, { status: 404 });
        }

        const { userId } = auth();
        if (!userId) { 
          return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

    await prisma.info.delete({
            where: { id }
        })
        return Response.json({message:"Info deleted"},{status: 200});
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}