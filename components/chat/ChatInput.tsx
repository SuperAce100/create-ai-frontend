"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChatInput = ({
  handleSubmit,
  handleInputChange,
  input,
  status,
  hasMessages,
  className,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  status: "ready" | "submitted" | "streaming" | "error";
  hasMessages: boolean;
  className?: string;
}) => {
  return (
    <form onSubmit={handleSubmit} className={cn("w-full relative", className)}>
      <Input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        disabled={status !== "ready"}
        placeholder={hasMessages ? "Ask a question" : "Start a new chat"}
        className="w-full pb-20 pt-6 px-4 rounded-xl text-md bg-background"
      />
      <Button
        type="submit"
        disabled={status !== "ready"}
        variant="default"
        size="icon"
        className="absolute bottom-2 right-2"
      >
        <SendIcon className="w-4 h-4" />
      </Button>
    </form>
  );
};
