"use client";

import { Children, useState } from "react";
import copy from "clipboard-copy";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";

const CopyToClipboardButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <Button onClick={handleCopyClick}>
      <Copy />{" "}
    </Button>
  );
};

export default CopyToClipboardButton;
