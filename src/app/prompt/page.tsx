import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Copy } from "lucide-react";
import React from "react";

export default function PromptPage() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) =>
      `Requests - Repeat/ carry module, appeal, Transcipt${a.length - i}`,
  );
  return (
    <div className=" flex items-center justify-center p-10">
      <Command className=" max-w-[90%] rounded-lg border shadow-md sm:max-w-[70%]">
        <CommandInput placeholder="Search here!....." />
        <CommandList className=" flex flex-col items-center justify-center gap-4 p-2">
          <CommandEmpty>No prompt found.</CommandEmpty>
          <CommandGroup heading="Prompts" className="">
            {tags.map((tag) => (
              <CommandItem className="" key={tag}>
                <Button variant={"outline"} className="flex gap-2">
                  {tag}
                  <Copy size={12} />
                </Button>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
