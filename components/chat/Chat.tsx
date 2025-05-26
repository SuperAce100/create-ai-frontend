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
    <div className="flex flex-col h-full overflow-hidden container mx-auto max-w-screen-lg space-y-8 items-center justify-center pt-4 relative">
      {messages.length === 0 && (
        <h1 className="text-6xl font-semibold text-foreground tracking-tight">
          Chat about anything
        </h1>
      )}

      <div className="flex flex-col h-full overflow-y-auto w-full space-y-4 mb-24 pb-8">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

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
        className={messages.length > 0 ? "absolute bottom-4 left-0 right-0 z-10" : "mb-10"}
      />
    </div>
  );
}
