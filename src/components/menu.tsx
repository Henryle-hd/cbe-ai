import { Menu, Trash } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./themeToggle";
import TypeWriterTitle from "./typewriter";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserButton } from "@clerk/nextjs";

export default function SmallScreen() {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-[100%] items-center justify-between gap-2 rounded-xl bg-background p-2 px-4 shadow-md">
        <div className="flex items-center justify-center gap-2">
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
        <div className="flex items-center gap-2">
          <UserButton />
          <ThemeToggle />

          {/* <Button variant={"destructive"}>
          <Trash />
        </Button> */}
          <Button>
            <Menu />
          </Button>
        </div>
      </nav>
      <Separator />
    </>
  );
}
