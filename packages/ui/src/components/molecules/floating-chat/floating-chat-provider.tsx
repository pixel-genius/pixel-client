"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FloatingChat } from "./floating-chat";

interface FloatingChatContextType {
  isEnabled: boolean;
  enableChat: () => void;
  disableChat: () => void;
  toggleChat: () => void;
  supportName: string;
  setSupportName: (name: string) => void;
  supportAvatar: string | undefined;
  setSupportAvatar: (avatar: string | undefined) => void;
  onSendMessage?: (message: string) => void;
  setOnSendMessage: (callback: ((message: string) => void) | undefined) => void;
}

const FloatingChatContext = createContext<FloatingChatContextType | undefined>(
  undefined,
);

export function useFloatingChat() {
  const context = useContext(FloatingChatContext);

  if (context === undefined) {
    throw new Error(
      "useFloatingChat must be used within a FloatingChatProvider",
    );
  }

  return context;
}

interface FloatingChatProviderProps {
  children: ReactNode;
  initialEnabled?: boolean;
  supportName?: string;
  supportAvatar?: string;
  onSendMessage?: (message: string) => void;
}

export function FloatingChatProvider({
  children,
  initialEnabled = false,
  supportName = "Support",
  supportAvatar,
  onSendMessage,
}: FloatingChatProviderProps) {
  const [isEnabled, setIsEnabled] = useState(initialEnabled);
  const [currentSupportName, setSupportName] = useState(supportName);
  const [currentSupportAvatar, setSupportAvatar] = useState(supportAvatar);
  const [messageHandler, setMessageHandler] = useState<
    ((message: string) => void) | undefined
  >(onSendMessage);

  const enableChat = () => setIsEnabled(true);
  const disableChat = () => setIsEnabled(false);
  const toggleChat = () => setIsEnabled((prev) => !prev);

  const value = {
    isEnabled,
    enableChat,
    disableChat,
    toggleChat,
    supportName: currentSupportName,
    setSupportName,
    supportAvatar: currentSupportAvatar,
    setSupportAvatar,
    onSendMessage: messageHandler,
    setOnSendMessage: setMessageHandler,
  };

  return (
    <FloatingChatContext.Provider value={value}>
      {children}
      {isEnabled && (
        <FloatingChat
          supportName={currentSupportName}
          supportAvatar={currentSupportAvatar}
          onSendMessage={messageHandler}
        />
      )}
    </FloatingChatContext.Provider>
  );
}
