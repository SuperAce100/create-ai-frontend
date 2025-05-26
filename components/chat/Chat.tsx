"use client";

import { Message, useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
import { Loader2 } from "lucide-react";
import { ChatMessage } from "@/components/chat/ChatMessage";

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
    <>
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

      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={status !== "ready"}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
