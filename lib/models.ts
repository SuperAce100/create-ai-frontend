export const MODELS = [
  {
    id: "openai/gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    description: "OpenAI's small model, best for quick tasks",
  },
  {
    id: "openai/gpt-4.1",
    name: "GPT-4.1",
    description: "Most capable model, best for complex tasks",
  },
  {
    id: "anthropic/claude-sonnet-4",
    name: "Claude Sonnet 4",
    description: "Anthropic's most powerful model",
  },
  {
    id: "anthropic/claude-3.5-haiku",
    name: "Claude 3.5 Haiku",
    description: "Balanced performance and speed",
  },
] as const;

export type ModelId = (typeof MODELS)[number]["id"];
