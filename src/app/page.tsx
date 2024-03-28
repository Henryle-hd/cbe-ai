"use client";

import ChatInput from "@/components/Chat-input";
import { Bot } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import CurvedArrow from "@/app/assets/curveArrow.png";

export default function Home() {
  // let botColor = "#000";
  // const { theme } = useTheme();
  // theme === "dark" ? (botColor = "#fff") : (botColor = "#000");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      {/* Bot icon  */}
      <Bot size={150} className="dark:text-cbeaiclr-5" strokeWidth={0.5} />

      {/* heading  */}
      <div>
        <h1 className="light:text-cbeaiclr-3 mb-1 text-center text-3xl font-bold text-cbeaiclr-3 dark:text-cbeaiclr-5 md:text-5xl">
          Welcome to the{" "}
          <span className="block rounded-xl bg-cbeaiclr-1 p-2 text-white sm:inline-block">
            CBE AI 🤖
          </span>
        </h1>
        <p className="p-4 text-center font-mono text-sm text-cbeaiclr-1">
          Offer quality public services through applied research
        </p>
      </div>

      {/* call to action  */}
      <Image
        alt="arrow"
        src={CurvedArrow}
        height={30}
        width={30}
        className="animate-bounce"
      />

      {/* input prompt  */}
      {/* <div className="h-10 w-[70%] border"></div> */}
      <ChatInput />

      {/* features objectives  */}
    </main>
  );
}
