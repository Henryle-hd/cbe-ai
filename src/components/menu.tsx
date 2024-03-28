import { Menu, Trash } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./themeToggle";
import TypeWriterTitle from "./typewriter";
import { Separator } from "./ui/separator";

export default function SmallScreen() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex w-[100%] items-center justify-between gap-2 rounded-xl bg-background p-2 px-4 shadow-md">
        <div className="text-xl font-bold text-cbeaiclr-1">
          <TypeWriterTitle />
        </div>
        <div className="flex items-center gap-2">
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
