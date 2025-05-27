import { openai } from "@ai-sdk/openai";
import { appendResponseMessages, streamText } from "ai";
import { saveChat } from "@/lib/chat-store";
import { tools } from "@/lib/tools";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { type ModelId } from "@/lib/models";

export async function POST(req: Request) {
  const { messages, id, model } = await req.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = streamText({
    model: openrouter(model as ModelId),
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
    maxSteps: 50,
  });

  return result.toDataStreamResponse();
}
