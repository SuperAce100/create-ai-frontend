"use client";

import { Message, useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
import { Loader2 } from "lucide-react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { cn } from "@/lib/utils";

export default function Chat({ id, initialMessages }: { id: string; initialMessages: Message[] }) {
  const { messages, input, handleInputChange, handleSubmit, status, stop, error, reload } = useChat(
    {
      api: "/api/chat",
      initialMessages,
      id,
      generateId: createIdGenerator({
        prefix: "msgc",
        size: 16,
      }),
      sendExtraMessageFields: true,
    }
  );

  return (
    <div className="flex flex-col h-full w-full mx-auto space-y-8 items-center justify-center pt-4 overflow-y-auto">
      {messages.length === 0 && (
        <h1 className="text-6xl font-semibold text-foreground tracking-tight">
          Chat about anything
        </h1>
      )}

      {messages.length > 0 && (
        <div className="flex flex-col w-full space-y-4 max-w-screen-lg px-2 min-h-0 flex-1">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div className="h-32 w-full min-h-32" />
        </div>
      )}

      {(status === "submitted" || status === "streaming") && (
        <div>
          {status === "submitted" && <Loader2 className="animate-spin" />}
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}

      <ChatInput
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
        status={status}
        hasMessages={messages.length > 0}
        className={
          messages.length > 0
            ? "fixed bottom-4 mx-auto z-10 max-w-screen-lg"
            : "mb-10 max-w-screen-lg"
        }
      />
    </div>
  );
}
