import React from 'react'
import { Skeleton } from './ui/skeleton'

type Props = {}

export default function LoadingSkeleton({ }: Props) {
    return (
        <div className='grid grid-cols-12 gap-4 w-full min-h-screen'>
            <div className="col-start-1 col-end-13 px-4 flex flex-col gap-4 mb-10">
                <Skeleton className="w-full h-[80vh]" />
                <Skeleton className="w-full h-[15vh]" />
            </div>
        </div>
    )
}