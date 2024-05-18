'use client'

import { Info as infoModel } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button';
    interface listOfTitleProps {
        info: infoModel;
    }
export default function ListOfCbeInfoTitle({info}:listOfTitleProps) {
return (
  <Button
    key={info.id}
    variant="outline"
    size={"lg"}
    className="mb-2 w-full text-sm"
  >
    {info.title}
  </Button>
);
}
