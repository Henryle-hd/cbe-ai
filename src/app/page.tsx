"use client";

import ChatInput from "@/components/Chat-input";
import { BirdIcon, Bot, icons, Newspaper, Rabbit } from "lucide-react";
import Image from "next/image";
import React from "react";
import CurvedArrow from "@/app/assets/curveArrow.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "Mission",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "BirdIcon",
    },
    {
      title: "Vision",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "Rabbit",
    },
    {
      title: "Tips",
      describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "Newspaper",
    },
  ];
  return (
    <main className="mt-10 flex min-h-screen flex-col items-center justify-center gap-5">
      {/* Bot icon  */}
      <Bot size={150} className="dark:text-cbeaiclr-5" strokeWidth={0.5} />

      {/* heading  */}
      <div>
        <h1 className="light:text-cbeaiclr-3 mb-1 text-center text-3xl font-bold text-cbeaiclr-3 dark:text-cbeaiclr-5 md:text-5xl">
          Welcome to the{" "}
          <span className="block rounded-xl bg-cbeaiclr-1 p-2 text-white sm:inline-block">
            CBE AI
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
      <div className="h-10 w-[70%] ">
        <ChatInput />
      </div>

      {/* features objectives  */}
      <div className="my-10 flex flex-col items-center justify-center gap-4">
        <h1>Key Features</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:px-5 lg:grid-cols-3 lg:px-10">
          {/* Card 01 */}
          {features.map((feature) => (
            <Card
              className="bg-[#f0f0f0] shadow dark:bg-background"
              key={feature.title}
            >
              <CardContent className="flex flex-col items-center justify-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border">
                    {feature.icon === "BirdIcon" ? (
                      <BirdIcon size={50} strokeWidth={0.5} />
                    ) : feature.icon === "Rabbit" ? (
                      <Rabbit size={50} strokeWidth={0.5} />
                    ) : (
                      <Newspaper size={50} strokeWidth={0.5} />
                    )}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription>{feature.describe}</CardDescription>
              </CardContent>
            </Card>
          ))}

          {/* Card 02 */}
          {/* <Card className="bg-[#f0f0f0] shadow dark:bg-background">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border ">
                  <Newspaper size={50} strokeWidth={0.5} />
                </div>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardContent>
          </Card> */}

          {/* Card 03 */}
          {/* <Card className="bg-[#f0f0f0] shadow dark:bg-background">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border">
                  <Rabbit size={50} strokeWidth={0.5} />
                </div>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </main>
  );
}
