import React from 'react'
import NotFoundImage from '@/app/assets/WhatsApp-BOT-Image-2_2(1).gif'
import Image from 'next/image'
export default function Notfound() {
return (
    <div className='flex flex-col justify-center items-center'>
        <Image
            alt='not-Avilable-image'
            src={NotFoundImage}
            className=''
        />
        <h2 className='text-2xl'>404 Not found</h2>
    </div>
)
}
