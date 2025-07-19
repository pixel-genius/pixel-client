import { useState } from "react";

import { Message } from "./types";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you with your product submission. Do you have any questions?",
      sender: "admin",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage("");

      // Simulate admin typing response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const adminResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message! I'll review your product details and get back to you shortly.",
          sender: "admin",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, adminResponse]);
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return {
    messages,
    newMessage,
    isTyping,
    setNewMessage,
    handleSendMessage,
    handleKeyDown,
  };
};
