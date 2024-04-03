"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { ArrowUpRight, Link2, Moon, Sun, Trash } from "lucide-react";
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
    link: "https://www.cbe.ac.tz/",
  },
  {
    title: "Cosis",
    link: "https://cosis.cbe.ac.tz/",
  },
  {
    title: "E-Learning",
    link: "http://lms.cbe.ac.tz/login/index.php",
  },
];

function AsideComponent() {
  return (
    <Card className="sticky left-0 top-0 flex min-h-screen w-full  flex-col justify-start gap-2 rounded-l-none rounded-r-xl bg-[#f0f0f0] px-1 dark:bg-background">
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
        <ScrollArea className="h-64 w-full rounded-md border bg-slate-100 dark:bg-background">
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
        <Link
          href={"/prompt"}
          className="flex items-center justify-center gap-2 text-[9px] text-gray-800"
        >
          view more prompt <ArrowUpRight size={9} />
        </Link>

        <div className="mt-1 flex flex-col justify-start gap-2">
          <h1 className="text-sm font-thin ">Quick Links</h1>
          <div>
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="flex items-center justify-start gap-2 text-sm text-gray-400"
              >
                <ArrowUpRight size={16} />
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <Separator />
        {/* // delete conversation */}
        <div className="flex flex-col items-start justify-start gap-2 text-[12px]">
          <div className="flex  items-center justify-start gap-2">
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-8 w-8 rounded-full p-1"
            >
              <Trash />
            </Button>
            <span>Clear Conversion</span>
          </div>
          {/* //dark mode */}

          <div className="flex  items-center justify-start gap-2 ">
            <ThemeToggle /> <span>change mode</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AsideComponent;
