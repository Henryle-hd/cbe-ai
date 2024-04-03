"use client";

import AddCategory from "@/components/addCategory";
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AdminPage() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div className="grid grid-flow-dense gap-3  sm:grid-cols-2 lg:grid-cols-3">
        {/* {allNotes.map((note) => (
      <NodeList note={note} key={note.id} />
    ))} */}

        <div
          className="mx-5 mt-16 flex h-32 flex-col items-center justify-center gap-2 rounded-md  border-2 shadow-md hover:text-cbeaiclr-1  hover:shadow-lg sm:mt-5"
          onClick={() => setShowDialog(true)}
        >
          <Plus />
          <h1>Add Categories</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <AddCategory open={showDialog} setOpen={setShowDialog} />
      </div>
    </>
  );
}
