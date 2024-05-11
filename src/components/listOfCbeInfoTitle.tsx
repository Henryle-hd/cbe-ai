'use client'

import { Info as infoModel } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button';
    interface listOfTitleProps {
        info: infoModel;
    }
export default function ListOfCbeInfoTitle({info}:listOfTitleProps) {
return (
        <Button>
            {info.title}
        </Button>
);
}
