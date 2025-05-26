"use client";

import { Message, useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
import { Loader2 } from "lucide-react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";

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
    <div className="flex flex-col h-full container mx-auto max-w-screen-lg">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

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
      />
    </div>
  );
}
