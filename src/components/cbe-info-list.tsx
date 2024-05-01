'use client';

import { Info as InfoModel } from "@prisma/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { useState } from "react";
import AddCategory from "./addEditCategory";

interface cbeInfoListProps {
  info:InfoModel
}


export default function CbeInfoList(
{info}: cbeInfoListProps

) {

  //editDialog 
  const [showEditDialog, setShowEditDialog] = useState(false);

    const wasUpdated = info.updatedAt > info.createdAt;

    const createdUpdatedAtTimestamp = (
        wasUpdated ? info.updatedAt : info.createdAt
    ).toDateString();
  return (
    <>
      <Card
        className="no-scrollbar max-h-[45vh] cursor-pointer overflow-scroll transition-shadow hover:shadow-lg"
        onClick={() => setShowEditDialog(true)}
      >
        <CardHeader>
          <CardTitle className="text-[#7bd5f5]">{info.title}</CardTitle>
          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && "(updated)"}
          </CardDescription>
        </CardHeader>

        <Separator className="mb-2" />

        <CardContent>
          <p className="whitespace-pre-line">{info.main_body}</p>
        </CardContent>
      </Card>
      <AddCategory
        open={showEditDialog}
        setOpen={setShowEditDialog}
        infoToEdit={info}
      />
    </>
  );
}
