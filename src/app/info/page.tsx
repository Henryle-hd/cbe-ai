import prisma from '@/lib/db/prisma';
import { auth } from '@clerk/nextjs'
import React from 'react'

export default async function InfoPage() {
    const { userId } = auth();

    if (!userId) throw new Error('UserId undefined');
    const allInfos = await prisma.info.findMany();

  return (
    <div>
      {JSON.stringify(allInfos)}
    </div>
  )
}
