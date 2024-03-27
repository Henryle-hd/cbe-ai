"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Link2, Moon, Sun, Trash } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import TypeWriterTitle from "./typewriter";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "./themeToggle";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

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
];

function AsideComponent() {

  return (
    <Card className="sticky left-0 top-0 flex min-h-screen w-full flex-col  justify-start gap-4 rounded-l-none rounded-r-xl px-1">
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

          <div className="text-xl font-bold text-cbeaiclr-1">
            <TypeWriterTitle />
          </div>
        </div>

        {/* // search prompt */}
        <Input
          placeholder="Search prompt..."
          className="rounded-lg text-gray-800"
        />

        {/* // container */}
        <ScrollArea className="h-60 w-full rounded-md border">
          <div className="p-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size={"lg"}
                className="mb-2 w-full text-sm"
                onClick={() => console.log("clicked")}
              >
                {tag}
              </Button>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-4 flex flex-col justify-start gap-2">
          <h1 className="text-xl font-bold">other links</h1>
          <div>
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="flex items-center justify-start gap-2 text-sm text-cbeaiclr-1"
              >
                <Link2 />
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <Separator />
        {/* // delete conversation */}
        <Button
          variant={"destructive"}
          className="flex items-center justify-start gap-2"
        >
          <Trash />
          Delete conversation
        </Button>
        {/* //dark mode */}

        <ThemeToggle />
      </CardContent>
    </Card>
  );
}

export default AsideComponent;
