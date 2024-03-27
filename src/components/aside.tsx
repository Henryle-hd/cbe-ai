"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Delete, DeleteIcon, Moon, Sun, Trash, Truck } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import TypeWriterTitle from "./typewriter";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
function AsideComponent() {
  const { theme, setTheme } = useTheme();



  return (
    <>
      <Card className="sticky left-0 top-0 flex min-h-screen w-full flex-col  justify-start gap-4 rounded-r-xl rounded-l-none px-1">
        <CardContent className="flex flex-col justify-start gap-4">
          {/* // cbe logo */}
          <div className="relative left-2 top-0 my-3 flex items-center justify-start gap-3">
            <Avatar className="p-1">
              <AvatarImage
                src="https://cosis.cbe.ac.tz//assets/themes/logo.png"
                className=""
              />
              <AvatarFallback className=" font-bold text-cbeaiclr-1">
                CBE
              </AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-bold text-cbeaiclr-1">
              {" "}
              <TypeWriterTitle />
            </h2>
          </div>

          {/* // search prompt */}
          <Input
            placeholder="Search prompt..."
            className="rounded-lg text-gray-800"
          />

          {/* // container */}
          <div className=" max-h-96 min-h-96 w-full overflow-scroll rounded-lg border bg-white text-center text-cbeaiclr-4 shadow-md">
            <ul className="gap grid grid-cols-1 scroll-smooth">
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
          <Separator />
          {/* // delete conversation */}
          <Button
            variant={"destructive"}
            className="flex items-center justify-start gap-2">
            <Trash />
            Delete conversation
          </Button>
          {/* //dark mode */}

          {/* <Link href={"/"}>
            <span className="flex items-center justify-start gap-2">
              {" "}
              <Moon />
              Change themes
            </span>
          </Link> */}
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="outline"
            color="cbeaiclr-1"
            className="flex items-center justify-start gap-2"
          >
            {theme === "dark" ? <Sun /> : <Moon />} Change theme
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default AsideComponent;
