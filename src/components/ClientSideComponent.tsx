'use client'

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { ArrowUpRight, Trash } from "lucide-react";
import LogOutBtn from "./log-out-btn";
import { ThemeToggle } from "./themeToggle";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Separator } from "./ui/separator";


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

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Most asked questions ${a.length - i}`,
);
const ClientSideComponent = ({ children }: any) => {
    const [isChatPage, setIsChatPage] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsChatPage(window.location.pathname.includes("/chat"));
        }
    }, []);
    const { isSignedIn, user } = useUser();
    const router = useRouter();
    const isAdmnPage =
        typeof window !== "undefined" && window.location.pathname.includes("/admn");
    // const isChatPage =
    //     typeof window !== "undefined" && window.location.pathname.includes("/chat");

    return (
        <>
            <ScrollArea className="h-96 w-full rounded-md bg-slate-100 dark:bg-background">
            {isSignedIn ? (
                <>
                {!isAdmnPage && (
                    <div>
                    {tags.map((tag) => (
                        <Button
                        key={tag}
                        variant="outline"
                        size={"lg"}
                        className="mb-2 w-full text-sm"
                        onClick={() => router.push(`chat/${tag}`)}
                        >
                        {tag}
                        </Button>
                    ))}
                    </div>
                )}

                {isAdmnPage && (
                    <>
                    <div>{children}</div>
                    </>
                )}
                </>
            ) : (
                <div>
                {tags.map((tag) => (
                    <Button
                    key={tag}
                    variant="outline"
                    size={"lg"}
                    className="mb-2 w-full text-sm"
                    onClick={() => router.push(`chat/${tag}`)}
                    >
                    {tag}
                    </Button>
                ))}
                </div>
            )}
            </ScrollArea>
            <Link
            href="/prompt"
            className="flex items-center justify-center gap-2 text-[16px] text-gray-800"
            >
            view more prompt <ArrowUpRight size={16} />
            </Link>

            <Separator />
            <div className="flex flex-col justify-start gap-1">
            <h1 className="text-lg font-thin">Quick Links</h1>
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
            <div className="relative flex h-full flex-col items-start justify-start gap-2 text-[12px]">
            {isChatPage && (
                <div className={"flex items-center justify-start gap-2"}>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="h-8 w-8 rounded-full p-1"
                >
                    <Trash />
                </Button>
                <span>Clear Conversion</span>
                </div>
            )}
            <div className="flex  items-center justify-start gap-2 ">
                <ThemeToggle /> <span>change mode</span>
            </div>
            <div className="flex items-center justify-start gap-2"></div>
            </div>

            {isSignedIn && isAdmnPage && (
            <>
                <div className="bottom-0 flex items-center justify-center gap-2 space-x-3">
                <UserButton afterSignOutUrl="/chat" />
                <span>{`${user?.firstName} ${user?.lastName}`}</span>
                </div>
                <LogOutBtn />
            </>
            )}
        </>
    );
};

export default ClientSideComponent;