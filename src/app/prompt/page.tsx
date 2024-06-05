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
import { Separator } from "@/components/ui/separator";
import { Backpack, Copy } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PromptPage() {
const tags = [
  "How do I apply for admission?",
  "What are the eligibility criteria for registration?",
  "What documents are required for new student registration?",
  "What is the process for online registration?",
  "How is the tuition fee paid and what are the deadlines?",
  "What is the module registration process for new and continuing students?",
  "How do I transfer within the college or from other institutions?",
  "What are the deadlines for registration?",
  "What are the steps to complete the registration form?",
  "Where can I find information about the tuition fee structure?",
  "What should I do if I face difficulties during the application process?",
  "How do I get an admission number?",
  "What are the rules regarding fee payment and registration deadlines?",
  "How can I get assistance with the online application?",
  "What are the different academic programmes offered by the college?",
  "What are the required qualifications for various programmes?",
  "How do I verify my original certificates and testimonials?",
  "What is the process for module approval and who is responsible?",
  "What happens if I miss the registration deadlines?",
  "What are the contact details for different campuses?",
];

  return (
    // will be tested later
    // <div className=" flex items-center justify-center p-10">
    //   <Command className=" max-w-[90%] rounded-lg border shadow-md sm:max-w-[70%]">
    //     <CommandInput placeholder="Search here!....." />
    //     <CommandList className=" flex flex-col items-center justify-center gap-4 p-2">
    //       <CommandEmpty>No prompt found.</CommandEmpty>
    //       <CommandGroup heading="Prompts" className="">
    //         {tags.map((tag) => (
    //           <CommandItem className="" key={tag}>
    //             <Button variant={"outline"} className="flex gap-2">
    //               {tag}
    //               <Copy size={12} />
    //             </Button>
    //           </CommandItem>
    //         ))}
    //       </CommandGroup>
    //     </CommandList>
    //   </Command>
    // </div>
    <div className="flex items-center justify-center  pt-5 ">
      <div className=" flex w-[80%] flex-col items-start justify-center gap-4 rounded-lg border bg-[#f0f0f0] p-2 dark:bg-background sm:w-[80%]">
        <Button asChild>
          <Link href={"/chat"}>
            <Backpack />
            Back
          </Link>
        </Button>
        <Separator />

        <div className="flex h-[80vh] w-full flex-col items-center justify-start gap-2 overflow-auto p-2 no-scrollbar">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={"outline"}
              className="h-[25vh] w-full p-4 flex justify-start"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
