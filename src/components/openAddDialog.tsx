"use client";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import AddEditCategory from "./addEditCategory";
import { Card, CardContent } from "./ui/card";
export default function OpenAddDialog() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Card
        className=" transition-shadow hover:cursor-pointer hover:text-cbeaiclr-1 hover:shadow-lg text-xl"
        onClick={() => setShowDialog(true)}
      >
        <CardContent className="flex h-[16vh] flex-col items-center justify-center gap-2 ">
          <Plus />
          <h1>Add Information 📚</h1>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center ">
        <AddEditCategory open={showDialog} setOpen={setShowDialog} />
      </div>
    </>
  );
}
