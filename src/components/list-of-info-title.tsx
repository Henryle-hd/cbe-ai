//error!!
import prisma from '@/lib/db/prisma';
import React from 'react'
import { Button } from './ui/button';

export default async function ListOfInfoTitle() {
    const allInfos = await prisma.info.findMany();
     const isAdmnPage =
      typeof window !== "undefined" &&
        window.location.pathname.includes("/admn");
    return (
      <>
        {isAdmnPage && (
          <div>
            {allInfos.map((info) => (
              <Button
                key={info.id}
                variant="outline"
                size={"lg"}
                className="mb-2 w-full text-sm"
                onClick={() => console.log("clicked")}
              >
                {info.title}
              </Button>
            ))}
          </div>
        )}
      </>
    );
}
