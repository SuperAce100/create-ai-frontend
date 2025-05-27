import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Zap,
  Palette,
  Database,
  Wrench,
  Type,
  Server,
  Terminal,
  Settings,
  FileCode,
} from "lucide-react";

export default function Home() {
  return (
    <main className="h-full bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 text-center">
        <h1 className="text-7xl font-medium tracking-tight">Build AI Chat Apps with Ease</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          A powerful template for creating AI-powered chat applications using Vercel AI SDK. Get
          started in minutes, not hours.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <a
              href="https://github.com/SuperAce100/create-ai-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#features">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-5xl font-medium tracking-tight text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Vercel AI SDK",
              description:
                "Built on top of Vercel's powerful AI SDK for seamless integration with streaming responses and tool calling",
              icon: Zap,
            },
            {
              title: "TypeScript Ready",
              description:
                "Full TypeScript support with strict type checking and comprehensive type definitions",
              icon: Type,
            },
            {
              title: "Modern Stack",
              description: "Next.js 15, React Server Components, Shadcn UI, Tailwind CSS, and more",
              icon: Code,
            },
            {
              title: "Chat Persistence",
              description:
                "Chats are saved to a local file system with a replacable storage layer for easy database integration",
              icon: Database,
            },
            {
              title: "Model Agnostic",
              description:
                "Use any model through OpenRouter or Vercel AI SDK with easy model switching",
              icon: Server,
            },
            {
              title: "Tool Calling + Generative UI",
              description:
                "Create custom tools with beautiful UI components that render based on tool results",
              icon: Wrench,
            },
          ].map((feature) => (
            <Card key={feature.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Setup Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/50 rounded-3xl my-16">
        <h2 className="text-5xl font-medium tracking-tight text-center mb-12">Quick Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Clone and install dependencies:</p>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto">
                <code>{`git clone https://github.com/SuperAce100/create-ai-frontend.git
cd create-ai-frontend
pnpm i
pnpm dev`}</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                The app will be available at{" "}
                <code className="bg-background px-2 py-1 rounded">http://localhost:3000</code>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Environment Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Create a <code className="bg-background px-2 py-1 rounded">.env</code> file in the
                root directory:
              </p>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto">
                <code>{`# Get your API key from https://openrouter.ai
OPENROUTER_API_KEY=sk-or-YOUR_KEY

# Optional: Configure default model
DEFAULT_MODEL=anthropic/claude-sonnet-4`}</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Sign up at OpenRouter to get your API key
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Customization Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-5xl font-medium tracking-tight text-center mb-12">
          Endless Customization
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                Add Models
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Add models from OpenRouter in{" "}
                <code className="bg-background px-2 py-1 rounded">lib/models.ts</code>:
              </p>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`export const models = {
  "anthropic/claude-sonnet-4": {
    name: "Claude Sonnet 4",
    description: "Anthropic's general purpose model",
  },
  "openai/gpt-4-turbo": {
    name: "GPT-4 Turbo",
    description: "OpenAI's most capable model",
  },
} as const;`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Create Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Build custom tools in{" "}
                <code className="bg-background px-2 py-1 rounded">lib/tools.ts</code>:
              </p>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`export const weatherTool = {
  name: "getWeather",
  description: "Get current weather for a location",
  parameters: {
    location: "string",
  },
  handler: async ({ location }) => {
    // Implement weather fetching logic
    return { temperature: 72, condition: "Sunny" };
  },
};`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Style Your App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Customize your app's appearance:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Colors in <code className="bg-background px-2 py-1 rounded">app/globals.css</code>
                </li>
                <li>Components using Shadcn UI</li>
                <li>
                  Layout in{" "}
                  <code className="bg-background px-2 py-1 rounded">components/layout/</code>
                </li>
                <li>
                  Chat UI in{" "}
                  <code className="bg-background px-2 py-1 rounded">components/chat/</code>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
