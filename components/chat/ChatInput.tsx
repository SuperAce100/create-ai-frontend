"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ChatInput = ({
  handleSubmit,
  handleInputChange,
  input,
  status,
  hasMessages,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  status: "ready" | "submitted" | "streaming" | "error";
  hasMessages: boolean;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        disabled={status !== "ready"}
        placeholder={hasMessages ? "Ask a question" : "Start a new chat"}
      />
      <Button type="submit" disabled={status !== "ready"}>
        Submit
      </Button>
    </form>
  );
};
