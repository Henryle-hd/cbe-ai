"use client";


import {useChat} from "ai/react"
import ChatInput from "@/components/Chat-input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BirdIcon, Delete, Send } from "lucide-react";
import {Message} from 'ai'
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Aichat() {
  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error
  } = useChat();


  //for auto focus
  const inputRef = useRef<HTMLInputElement>(null);
  const open: boolean = true;
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open])


  //for auto scroll
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);


  const previousMessageIsUser = messages[messages.length - 1]?.role === 'user';

  return (
    <main className="relative flex h-screen flex-col sm:px-2 md:px-4 lg:px-10">
      <div
        className="h-full overflow-auto bg-transparent p-2 px-3 md:p-4 lg:p-10"
        ref={scrollRef}
      >
        {messages.map((message) => (
          <Chatmessage message={message} key={message.id} />
        ))}

        {isLoading && previousMessageIsUser && (
          <Chatmessage
            message={{
              role: "assistant",
              content:"working on...",
          }}/>
        )}

        {error&&(
          <Chatmessage
            message={{
              role: "assistant",
              content:"Something went wrong. Please try your question again."
            }}/>
        )}


        {!error&&messages.length===0 && (
        <div className="h-full flex flex-col items-center justify-center text-center text-cbeaiclr-1 ">
          <BirdIcon size={200} strokeWidth={1} className="animate-bounce" />
          Type your question to start chatting with CBE AI.
        </div>
      )}
      </div>
      <div className="px-14  pb-5">
        <form
          onSubmit={handleSubmit}
          className=" flex h-14 items-center justify-center rounded-md border bg-background p-1 shadow-md"
        >
          {/* <Button
            className="h-full rounded-md rounded-r-none "
            size={"icon"}
            title="clear convesation"
            variant={'outline'}
            type="button"
            onClick={() => setMessages([])}
          >
            <Delete />
          </Button> */}

          <Input
            placeholder="Type a Question..."
            onChange={handleInputChange}
            value={input}
            className="h-full w-full rounded-none border-none bg-transparent focus-visible:ring-0"
            ref={inputRef}
          />

          <Button
            className="h-full rounded-md rounded-l-none bg-cbeaiclr-1"
            size={"icon"}
            type="submit"
            aria-label="Send Message"
          >
            <Send />
          </Button>
        </form>
      </div>
    </main>
  );
}


// interface message {
//   mesage: Message;
// }
//error

function Chatmessage({ message: { role, content } }: { message: Pick<Message, "role" | "content"> }) {
  const isCbeAiMessage = role === 'assistant';

  return (
    <div
      className={cn(
        "mb-3 flex items-center gap-2 mt-12 sm:mt-1",
        isCbeAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isCbeAiMessage && (
        // <div className="mb-4 flex items-start gap-2 pr-12 md:gap-4">
        <Avatar>
          <AvatarImage
            src="https://www.iconarchive.com/download/i140988/microsoft/fluentui-emoji-flat/Robot-Flat.1024.png"
            alt="cbeai"
            className="object-cover"
          />

          <AvatarFallback>AI</AvatarFallback>
        </Avatar>

        // </div>
      )}

      <Card
        className={cn(
          "whitespace-pre-line px-2 ",
          isCbeAiMessage ? "bg-background" : "bg-foreground text-background",
        )}
      >
        <CardContent className="p-2 md:p-4 lg:p-4">
          <p className="  ">{content}</p>
        </CardContent>
      </Card>

      {!isCbeAiMessage && (
        <Avatar>
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87NMEa-JLyykEpAHDobica15GN5Ge8GISAQ&usqp=CAU"
            alt="User"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      )}

      {/* {chatMessages.map((message, index) => (  className="mb-4 flex items-start gap-2 md:gap-4">
            {message.from === "user" ? (
              <div className="mb-4 flex w-full items-center justify-end gap-4">
                <Card className="flex w-auto items-center justify-end bg-foreground text-background">
                  <CardContent className=" p-2  md:p-4 lg:p-4">
                    <p className="">{message.message}</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
            )}
          </div>
        ))} */}
    </div>
  );
 
  
}
