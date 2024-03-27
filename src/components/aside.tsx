"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Link2, Moon, Sun, Trash } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import TypeWriterTitle from "./typewriter";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const otherLinks = [
  {
    title: "CBE website",
    link: "/",
  },
  {
    title: "Cosis",
    link: "/",
  },
  {
    title: "CBE library",
    link: "/",
  },
]

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
          <ScrollArea className="h-60 w-full rounded-md border">
            <div className="p-2">
              {tags.map((tag, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size={"lg"}
                  className="text-sm w-full mb-2"
                  onClick={() => console.log("clicked")}
                >
                  {tag}
                </Button>
              ))}

            </div>
          </ScrollArea>

          <div className="flex flex-col justify-start gap-2 mt-4">
            <h1 className="font-bold text-xl">other links</h1>
            <div>
              {
                otherLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className="flex items-center justify-start gap-2 text-cbeaiclr-1 text-sm"
                  >
                    <Link2 />
                    {link.title}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* <div className=" max-h-96 min-h-96 w-full overflow-scroll rounded-lg border bg-white text-center text-cbeaiclr-4 shadow-md">
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
          </div> */}
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
