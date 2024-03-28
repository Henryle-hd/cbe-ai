"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Form } from "./ui/form";

const ChatInput = () => {
  return (
    <Form>
      <div className="flex items-center justify-start bg-white shadow-md">
        <Input
          className="w-full rounded-xl rounded-r-none "
          placeholder="Type a message..."
          type="text"
        />
        <Button
          className="rounded-xl rounded-l-none bg-cbeaiclr-1"
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
