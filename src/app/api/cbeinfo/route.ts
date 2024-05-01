import { cbeinfoIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import { getCbeinfoEmbedding } from "@/lib/openia";
import { addInfoSchema, deleteInfoSchema, updateInfoSchema } from "@/lib/validation/cbeinfo";
import { auth } from "@clerk/nextjs";
import { error } from "console";


//create info in db and index
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

        const embedding = await getEmbeddingForCbeInfo(title, main_body);

        //will be roled back if the transaction is fail
        const info = await prisma.$transaction(async (tx) => {
            const info = await tx.info.create({
                data: {
                title,
                main_body,
                },
            });

            // will be created when the above operation is complete successfully
            await cbeinfoIndex.upsert([
                {
                    id: info.id,
                    values: embedding,
                }
            ])
            return info;
        })

     return Response.json({info}, {status: 201});
    } catch (error) {
        console.error(error);
        return Response.json({error:"Internal server error"},{status:500});
    }
}



//update info in db and index
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


        const embedding = await getEmbeddingForCbeInfo(title, main_body);

        //if the operation fails, the next operation will not be executed
        const updatedInfo = await prisma.$transaction(async (tx) => {
            const updatedInfo = await tx.info.update({
            where: { id },
            data: {
                title,
                main_body,
            },
            });

            //if the operation fails the the above operation will roled back
            await cbeinfoIndex.upsert([
                {
                    id,
                    values: embedding,
                }
            ])

            return updatedInfo;
        })
    return Response.json({updatedInfo}, {status: 200});
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}



//delete info from db and index
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

        //info deleted when both operations are successful

        await prisma.$transaction(async (tx) => {
            await tx.info.delete({
            where: { id },
            });
            await cbeinfoIndex.deleteOne(id);
        })
        return Response.json({message:"Info deleted"},{status: 200});
    }
    catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}



//fuction to sent data and get response as embedding

async function getEmbeddingForCbeInfo(title: string, main_body:string) {
    return getCbeinfoEmbedding(title + "\n\n " + main_body);
}