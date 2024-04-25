import OpenAddDialog from "@/components/openAddDialog";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";


export default async function Page() {

  //→→try to put this code to home page i think will be better
  // console.log("userId", userId);
  // if (userId !== 'user_2fGt4y5s9WPx2Kc9sqy6dQrvBZa') {
  //   router.push("/");
  // }
  const { userId } = auth();
  if (!userId) throw new Error("UserId undefined");
  const allInfos = await prisma.prompt.findMany();

  return (
    <>
      <OpenAddDialog />

      <div>{JSON.stringify(allInfos)}</div>
    </>
  );
}













































// "use client",
// // src/pages/admin/page.tsx
// import AddCategory from "@/components/addCategory";
// import { Plus } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/router";

// export default function AdminPage() {
//   const [showDialog, setShowDialog] = useState(false);
//   const { userId } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (userId !== process.env.ADMIN_ID) {
//       router.push("/"); // Redirect if not admin
//     }
//   }, [userId, router]);

//   // Show add category dialog if user is admin
//   return (
//     <>
//       <div className="grid grid-flow-dense gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {/* {/* {allNotes.map((note) => ( <NodeList note={note} key={note.id} /> ))} */} */}
//         <div
//           className="mx-5 mt-16 flex h-32 flex-col items-center justify-center gap-2 rounded-md border-2 shadow-md hover:text-cbeaiclr-1 hover:shadow-lg sm:mt-5"
//           onClick={() => setShowDialog(true)}
//         >
//           <Plus />
//           <h1>Add Categories</h1>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center ">
//         <AddCategory open={showDialog} setOpen={setShowDialog} />
//       </div>
//     </>
//   );
// }
