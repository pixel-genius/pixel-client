export * from "./components";
export * from "./hooks";
export * from "./lib/utils";

// Re-export for easier imports
export { useSupportChat } from "./hooks/use-support-chat";
export { FloatingChat } from "./components/molecules/floating-chat/floating-chat";
export {
  FloatingChatProvider,
  useFloatingChat,
} from "./components/molecules/floating-chat/floating-chat-provider";
