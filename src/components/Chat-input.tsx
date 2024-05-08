"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { Form } from "./ui/form";
import { useChat } from "ai/react";

const ChatInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error
  } = useChat();

  return (
    <form onChange={handleSubmit}>
      <div className="flex h-14 items-center justify-center rounded-md border bg-background p-1 shadow-md">
        <Input
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
          className="h-full w-full rounded-none border-none bg-transparent focus-visible:ring-0"
          placeholder="Type a message..."
          type="text"
        />
        <Button
          className="h-full rounded-md rounded-l-none bg-cbeaiclr-1"
          size={"icon"}
          type="submit"
          aria-label="Send Message"
        >
          <Send />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
