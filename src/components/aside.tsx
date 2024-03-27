import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AsideComponent() {
  return (
    <>
      <div className="sticky left-0 top-0 flex min-h-screen w-80 flex-col  justify-start rounded-lg rounded-bl-none rounded-tl-none bg-cbeaiclr-5 px-2">
        {/* // cbe logo */}
        <div className="relative left-2 top-0 my-3 flex items-center justify-start gap-3">
          <Avatar>
            {/* <AvatarImage
            src="https://cosis.cbe.ac.tz//assets/themes/logo.png"
            className="object-fill"
          /> */}
            <AvatarFallback className=" font-bold text-cbeaiclr-1">
              CBE
            </AvatarFallback>
          </Avatar>

          <h2 className="text-xl font-bold text-cbeaiclr-1"> CBE AI</h2>
        </div>

        {/* // search prompt */}
        {/* // container */}
        <div className=" max-h-96 min-h-96 w-full overflow-scroll rounded-lg bg-white text-center text-cbeaiclr-4 shadow-md">
          <ul className="gap grid grid-cols-1">
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              List branchs of CBE and courses they offer
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
            <li className=" mx-5  mt-2 rounded-lg bg-cbeaiclr-5 p-4 shadow-sm">
              Hello world list here!
            </li>
          </ul>
        </div>
      </div>

      {/* // delete conversation */}
      {/* //dark mode */}
    </>
  );
}

export default AsideComponent;
