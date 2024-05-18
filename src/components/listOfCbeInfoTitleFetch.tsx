//error!!
import prisma from '@/lib/db/prisma';
import React from 'react'
import { Button } from './ui/button';
import { auth } from '@clerk/nextjs';
import ListOfCbeInfoTitle from './listOfCbeInfoTitle';
import { ScrollArea } from './ui/scroll-area';

export default async function ListOfInfoTitleFetch() {
        const { userId } = auth();
        if (!userId) throw new Error("UserId undefined");
        const allInfos = await prisma.info.findMany();
    return (
      <ScrollArea className="h-96 w-full rounded-md bg-slate-100 dark:bg-background">
        {allInfos
          .slice()
          .reverse()
          .map((info) => (
            <div key={info.id}>
              <ListOfCbeInfoTitle info={info} />
            </div>
          ))}
      </ScrollArea>
    );
}