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
          className="hover:hadow-md mx-5 flex h-32 flex-col items-center justify-center gap-2 rounded-md border-2 shadow hover:text-cbeaiclr-1 sm:mt-5"
          onClick={() => setShowDialog(true)}
        >
          <Plus />
          <h1>Add Categories</h1>
        </div>
      </div>

      <AddCategory open={showDialog} setOpen={setShowDialog} />
    </>
  );
}
