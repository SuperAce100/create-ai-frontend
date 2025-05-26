import { Message } from "ai";
import { Weather } from "@/components/chat/tools/weather";

export const ChatMessage = ({ message }: { message: Message }) => {
  return (
    <div key={message.id}>
      <div>{message.role === "user" ? "User: " : "AI: "}</div>
      <div>{message.content}</div>

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
                {toolName === "displayWeather" ? <div>Loading weather...</div> : null}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
