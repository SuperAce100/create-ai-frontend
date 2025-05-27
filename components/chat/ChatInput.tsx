"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MODELS, type ModelId } from "@/lib/models";

export const ChatInput = ({
  handleSubmit,
  handleInputChange,
  input,
  status,
  hasMessages,
  className,
  selectedModel,
  onModelChange,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  status: "ready" | "submitted" | "streaming" | "error";
  hasMessages: boolean;
  className?: string;
  selectedModel: ModelId;
  onModelChange: (model: ModelId) => void;
}) => {
  return (
    <form onSubmit={handleSubmit} className={cn("w-full relative", className)}>
      <Input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        disabled={status !== "ready"}
        placeholder={hasMessages ? "Ask a question" : "Start a new chat"}
        className="w-full pb-20 pt-6 px-4 rounded-xl text-md bg-background disabled:opacity-100 disabled:cursor-not-allowed disabled:bg-background"
      />
      <Button
        type="submit"
        disabled={status !== "ready"}
        variant="default"
        size="icon"
        className="absolute bottom-2 right-2"
      >
        <SendIcon className="w-4 h-4" />
      </Button>
      <div className="flex items-center gap-2 absolute bottom-2 left-2">
        <Select value={selectedModel} onValueChange={(value) => onModelChange(value as ModelId)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue>
              {MODELS.find((model) => model.id === selectedModel)?.name || "Select a model"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {MODELS.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                <div className="flex flex-col">
                  <span>{model.name}</span>
                  <span className="text-xs text-muted-foreground">{model.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </form>
  );
};
