"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../atoms/button";
import { Avatar } from "../../atoms/avatar";
import { Input } from "../input";
import { ScrollArea } from "../../atoms/scroll-area";
import { X, MessageCircle, Send, Minimize2, Maximize2 } from "lucide-react";
import { usePostAiSupportGpt } from "@repo/apis/core/ai-support/gpt/post/use-post-ai-support-gpt";
import { ApiError, ApiResponse } from "@repo/apis/types/api.types";
import { PostAiSupportGptResponseTransformed } from "@repo/apis/core/ai-support/gpt/post/post-ai-support-gpt.types";
import { useMagicCursorStore } from "../magic-cursor/magic-cursor-store";

interface FloatingChatMessage {
  id: string;
  content: string;
  sender: "user" | "support";
  timestamp: Date;
}

interface FloatingChatProps {
  className?: string;
  supportName?: string;
  supportAvatar?: string;
  onSendMessage?: (message: string) => void;
  onClose?: () => void;
}

export function FloatingChat({
  className,
  supportName = "Support",
  supportAvatar,
  onSendMessage,
  onClose,
}: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<FloatingChatMessage[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "support",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setTasks } = useMagicCursorStore();

  const aiSupportMutation = usePostAiSupportGpt({
    onSuccess: (response: ApiResponse<PostAiSupportGptResponseTransformed>) => {
      const supportMessage: FloatingChatMessage = {
        id: `support-${Date.now()}`,
        content: response.data.data.agent.message,
        sender: "support",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, supportMessage]);
      setIsLoading(false);

      if (response.data.data.agent.action?.type === "cursor") {
        setTasks(response.data.data.agent.action.task);
      }

      // Handle any actions if needed
      // const action = response.data.data.bot.action;
      // if (action && action.type === "cursor" && action.target) {
      //   // Handle the action
      // }
    },
    onError: (error: ApiError) => {
      console.error("AI support error:", error);

      const errorMessage: FloatingChatMessage = {
        id: `support-${Date.now()}`,
        content:
          "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "support",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    },
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleSendMessage = () => {
    if (message.trim() === "" || isLoading) return;

    const newUserMessage: FloatingChatMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    onSendMessage?.(message);

    // Send to AI API
    setIsLoading(true);
    aiSupportMutation.mutate({ prompt: message });

    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  return (
    <div className={cn("fixed bottom-4 right-4 z-50", className)}>
      {/* Floating button when chat is closed */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "flex flex-col rounded-lg border border-border bg-card shadow-lg transition-all duration-200",
            isMinimized ? "h-14 w-96" : "h-[550px] w-96",
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-border p-3">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                {supportAvatar ? (
                  <img src={supportAvatar} alt={supportName} />
                ) : (
                  <div className="bg-primary text-primary-foreground flex h-full w-full items-center justify-center text-sm font-medium">
                    {supportName.charAt(0)}
                  </div>
                )}
              </Avatar>
              <span className="font-medium">{supportName}</span>
            </div>
            <div className="flex">
              <Button variant="secondary" size="sm" onClick={toggleMinimize}>
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="ml-1"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat messages */}
          {!isMinimized && (
            <ScrollArea className="flex-1 p-3">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex max-w-[80%] flex-col rounded-lg p-2",
                      msg.sender === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted",
                    )}
                  >
                    <span className="text-sm">{msg.content}</span>
                    <span className="ml-auto mt-1 text-xs opacity-70">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex max-w-[80%] flex-col rounded-lg p-2 bg-muted">
                    <span className="text-sm">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          )}

          {/* Chat input */}
          {!isMinimized && (
            <div className="border-t border-border p-3">
              <div className="flex items-end gap-2">
                <Input
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={message.trim() === "" || isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  ) : (
                    <Send className="size-5" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
