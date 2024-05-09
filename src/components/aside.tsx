"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { ArrowUpRight, Link2, LogOut, Moon, Sun, Trash } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import TypeWriterTitle from "./typewriter";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "./themeToggle";
import {UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import LogOutBtn from "./log-out-btn";
import prisma from "@/lib/db/prisma";
import ListOfInfoTitle from "./list-of-info-title";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Most asked questions ${a.length - i}`,
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


  //variables used for dynamic side bar

  //che if its admin page / admin
  const isAdmnPage =
    typeof window !== "undefined" && window.location.pathname.includes("/admn");
  const isPromptPage = false;
  const isHomePage = false;
  //check if its chart page
  const isChatPage =
    typeof window !== "undefined" && window.location.pathname.includes("/chat");

 const { isSignedIn, user } = useUser();

  return (
    <Card className="sticky left-0 top-0 flex max-h-[100vh] min-h-screen w-full  flex-col justify-start gap-2 overflow-hidden rounded-l-none rounded-r-sm bg-[#f0f0f0] px-1 dark:bg-background">
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

          <div className="w-full text-xl font-bold text-cbeaiclr-1">
            <TypeWriterTitle />
          </div>
        </div>
        {/* // search prompt */}
        <Input
          placeholder="Search prompt..."
          className="h-14 rounded-lg text-gray-800"
        />

        {/* // container of promts or list of CBE info */}
        <ScrollArea className=" h-96 w-full rounded-md bg-slate-100 dark:bg-background">
          {!isSignedIn? (
            <div className="">
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
          ) : (
            <>
                <p className="p-4 text-center italic">
                  cbe ai team is working to this feature
                </p>
            </>
          )}
          {/* {isSignedIn && (
            <ListOfInfoTitle />
          )} */}
        </ScrollArea>
        <Link
          href={"/prompt"}
          className="flex items-center justify-center gap-2 text-[16px] text-gray-800"
        >
          view more prompt <ArrowUpRight size={16} />
        </Link>

        {/* Quick Links */}
        <Separator />
        <div className=" flex flex-col justify-start gap-1">
          <h1 className="text-lg font-thin ">Quick Links</h1>
          <div>
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="flex items-center justify-start gap-2 text-[12px] text-gray-800 dark:text-primary"
              >
                <ArrowUpRight size={12} />
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* // Theme BTN and Delete conversation BTN */}
        <Separator />

        <div className="relative flex h-full flex-col items-start justify-start gap-2 text-[12px]">
          {/* Delete conversation BTN should be shown only if the page is chat page */}
          <div
            className={cn(
              "flex  items-center justify-start gap-2",
              isChatPage ? "flex" : "hidden",
            )}
          >
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-8 w-8 rounded-full p-1"
            >
              <Trash />
            </Button>
            <span>Clear Conversion</span>
          </div>

          {/* //Change mode */}

          <div className="flex  items-center justify-start gap-2 ">
            <ThemeToggle /> <span>change mode</span>
          </div>
        </div>

        {/* Admn profile  and logout button should be diplayed only in admin page */}
        {isSignedIn ? (
          <>
            {isAdmnPage && <Separator />}

            {isAdmnPage && (
              <div className=" bottom-0 flex items-center justify-center gap-2 space-x-3">
                <UserButton afterSignOutUrl="/chat" />
                <span>{`${user?.firstName}  ${user?.lastName} `}</span>
              </div>
            )}
            <LogOutBtn />
          </>
        ) : (
          <p className="text-cbeaiclr-1"></p>
        )}

        {/* ERROR */}
        {/* Logout btn */}
        {/* <div
          className={cn("flex flex-col gap-1")}
        >
          <Button className="">
            <LogOut />
            <span>Logout</span>
          </Button>
        </div> */}
        {/* {isAdmnPage && } <LogOutBtn />*/}

        <Separator />
        <p className="text-center text-[12px] text-opacity-50">
          Copyright © 2024
        </p>
      </CardContent>
    </Card>
  );
}

export default AsideComponent;
