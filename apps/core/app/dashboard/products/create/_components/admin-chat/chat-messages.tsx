import { AnimatePresence } from "framer-motion";

import { useEffect, useRef } from "react";

import { TypingIndicator } from "./typing-indicator";
import { MessageBubble } from "./message-bubble";
import { Message } from "./types";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
      <AnimatePresence>
        {messages.map((message, index) => (
          <MessageBubble key={message.id} message={message} index={index} />
        ))}
      </AnimatePresence>

      <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

      <div ref={messagesEndRef} />
    </div>
  );
};
