import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-full bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-7xl font-medium tracking-tight sm:text-7xl">
          Build AI Chat Apps with Ease
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          A powerful template for creating AI-powered chat applications using Vercel AI SDK. Get
          started in minutes, not hours.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">Get Started</Button>
          <Button variant="ghost" size="lg">
            Learn more{" "}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Vercel AI SDK",
              description: "Built on top of Vercel's powerful AI SDK for seamless integration",
            },
            {
              title: "TypeScript Ready",
              description: "Full TypeScript support for type-safe development",
            },
            {
              title: "Modern Stack",
              description: "Next.js 15, React Server Components, Shadcn UI, Tailwind CSS",
            },
            {
              title: "Chat Persistence",
              description:
                "Chats are saved to a local file system with a replacable storage layer.",
            },
            {
              title: "Model Agnostic",
              description: "Use any model you want through OpenRouter or Vercel AI SDK",
            },
            {
              title: "Tool Calling + Generative UI",
              description: "Use tools to get the job done and generate a UI for the tool results",
            },
          ].map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
