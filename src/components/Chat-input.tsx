"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Form } from "./ui/form";

const ChatInput = () => {
  return (
    <Form>
      <div className="flex h-14 items-center justify-center rounded-md border bg-background p-1 shadow-md">
        <Input
          className="h-full w-full rounded-none border-none bg-transparent focus-visible:ring-0"
          placeholder="Type a message..."
          type="text"
        />
        <Button
          className="rounded-md rounded-l-none bg-cbeaiclr-1"
          size={"icon"}
          type="submit"
          aria-label="Send Message"
        >
          <Send />
        </Button>
      </div>
    </Form>
  );
};

export default ChatInput;
