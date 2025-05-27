# Create AI Frontend

A modular, simple, chat frontend for agentic AI apps, built with TypeScript and NextJS using the Vercel AI SDK. Create a chat app in seconds so you can focus on the AI goodness.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔄 Real-time streaming responses
- 🎯 Multiple model support
- 🛠️ Easy tool integration
- 📱 Mobile-friendly design
- 🎭 Customizable themes
- 🔒 Type-safe with TypeScript

## Setup

1. Clone the repository:

```bash
git clone https://github.com/SuperAce100/create-ai-frontend.git
cd create-ai-frontend
```

2. Install dependencies:

```bash
pnpm i
```

3. Run the development server:

```bash
pnpm dev
```

## Configuration

### Adding Models

Add models from [OpenRouter](https://openrouter.ai/models) in `lib/models.ts`:

```typescript
{
  id: "anthropic/claude-sonnet-4",
  name: "Claude Sonnet 4",
  description: "Anthropic's general purpose model",
},
```

### Adding Tools

1. Create a new tool in `lib/tools.ts`:

```typescript
export const yourTool = {
  name: "your-tool",
  description: "Description of your tool",
  parameters: {
    // Define your parameters
  },
  handler: async (params) => {
    // Implement your tool logic
  },
};
```

2. Create a new component for the tool in `components/chats/tools/`:

```typescript
type WeatherProps = {
  temperature: number;
  weather: string;
  location: string;
};

export const Weather = ({ temperature, weather, location }: WeatherProps) => {
  return (
    <Card className="bg-sky-500 shadow-lg text-white rounded-xl p-6 px-2 m-4 w-lg relative overflow-hidden">
      <CardContent className="space-y-2 flex flex-col items-start">
        <div className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          {location}
        </div>
        <div className="text-8xl font-medium tracking-tight">{temperature}°C</div>
        <div className="text-lg opacity-90">{weather}</div>
        <div className="bg-amber-300 rounded-full p-2 absolute -top-10 -right-6 w-40 h-40 shadow-xl shadow-amber-300/50"></div>
      </CardContent>
    </Card>
  );
};
```

3. Add it to the generative UI in `components/chat/ChatMessage.tsx`!

```tsx
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
```

### Styling

The app uses Tailwind CSS for styling. You can customize:

- Colors in `app/globals.css`
- Fonts in `app/layout.tsx`
- Components in `components/ui/` using Shadcn

## Environment Variables

Create a `.env` file:

```bash
OPENROUTER_API_KEY=sk-or-YOUR_KEY
```

`
