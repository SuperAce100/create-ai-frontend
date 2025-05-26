import { openai } from "@ai-sdk/openai";
import { appendResponseMessages, streamText } from "ai";
import { saveChat } from "@/lib/chat-store";
import { tools } from "@/lib/tools";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export async function POST(req: Request) {
  const { messages, id } = await req.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = streamText({
    model: openrouter("openai/gpt-4o-mini"),
    messages,
    tools,
    async onFinish({ response }) {
      await saveChat({
        id,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      });
    },
  });

  return result.toDataStreamResponse();
}
