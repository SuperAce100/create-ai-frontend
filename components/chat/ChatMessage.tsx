import { Message } from "ai";
import { Weather } from "@/components/chat/tools/weather";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react";

export const ChatMessage = ({ message }: { message: Message }) => {
  return (
    <div key={message.id} className="w-full flex flex-col">
      {message.role === "user" ? (
        <div className="flex flex-col w-fit max-w-80% bg-primary p-2 px-3 border shadow-sm rounded-xl ml-auto items-end space-y-1">
          <div className="text-lg text-primary-foreground">{message.content}</div>
          <div className="text-xs text-primary-foreground">
            {new Date(message.createdAt).toLocaleTimeString()}
          </div>
        </div>
      ) : (
        <>
          <div className="text-lg prose">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>

          <div>
            {message.toolInvocations?.map((toolInvocation) => {
              const { toolName, toolCallId, state } = toolInvocation;

              if (state === "result") {
                if (toolName === "displayWeather") {
                  const { result } = toolInvocation;
                  return (
                    <div key={toolCallId}>
                      <Weather {...result} />
                    </div>
                  );
                }
              } else {
                return (
                  <div key={toolCallId}>
                    {toolName === "displayWeather" ? (
                      <div className="text-sm text-muted-foreground flex items-center gap-2 flex-row">
                        <Loader2 className="w-4 h-4 animate-spin" /> Loading...
                      </div>
                    ) : null}
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};
