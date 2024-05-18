import React from 'react'
import NotFoundImage from '@/app/assets/botgif.gif'
import Image from 'next/image'
import { Frown } from 'lucide-react'
export default function Notfound() {
return (
  <div className="flex h-screen flex-col items-center justify-center">
    <Image alt="not-Avilable-image" src={NotFoundImage} className="" />
    {/* <Frown /> */}
    <h1 className="font-mono text-5xl font-bold">404</h1>
    <h2 className="text-2xl opacity-50">Page Not found</h2>
    <p className="pt-5 text-center font-light">
      The Page you are looking for does not exist or an other error ocuurred,{" "}
      <br /> head over to{" "}
      <a href="/" className="text-cbeaiclr-1">
        CBE AI Home page
      </a>{" "}
      to choose a new direction
    </p>
  </div>
);
}
