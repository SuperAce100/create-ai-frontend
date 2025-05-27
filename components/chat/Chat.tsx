"use client";

import { Message, useChat } from "@ai-sdk/react";
import { createIdGenerator } from "ai";
import { Loader2, Atom, PenTool, Plane, Brain } from "lucide-react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { type ModelId } from "@/lib/models";
import { Button } from "@/components/ui/button";

export default function Chat({ id, initialMessages }: { id: string; initialMessages: Message[] }) {
  const [selectedModel, setSelectedModel] = useState<ModelId>("openai/gpt-4.1-mini");

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
      body: {
        model: selectedModel,
      },
    }
  );

  return (
    <div className="flex flex-col h-full w-full mx-auto items-center justify-center pt-4 overflow-y-auto">
      {messages.length === 0 && (
        <h1 className="text-6xl font-semibold text-foreground tracking-tight mb-8">
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
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        className={
          messages.length > 0
            ? "fixed bottom-4 mx-auto z-10 max-w-screen-lg"
            : "mb-4 max-w-screen-lg"
        }
      />

      {messages.length === 0 && (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-4 max-w-5xl">
            {[
              {
                text: "Explain quantum computing",
                icon: Atom,
              },
              {
                text: "Write a story about a robot",
                icon: PenTool,
              },
              {
                text: "Plan a trip to Japan",
                icon: Plane,
              },
              {
                text: "Explain neural networks",
                icon: Brain,
              },
            ].map(({ text, icon: Icon }) => (
              <Button
                key={text}
                onClick={() => handleInputChange({ target: { value: text } } as any)}
                variant="outline"
                className="w-full flex items-center justify-start gap-3"
              >
                <Icon className="w-5 h-5 text-primary" />
                {text}
              </Button>
            ))}
          </div>
          <div className="h-32" />
        </div>
      )}
    </div>
  );
}
