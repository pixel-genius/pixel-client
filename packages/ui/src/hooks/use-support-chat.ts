import { useFloatingChat } from "../components/molecules/floating-chat/floating-chat-provider";

/**
 * Custom hook for using the support chat functionality
 *
 * @example
 * ```tsx
 * import { useSupportChat } from "@repo/ui/hooks/use-support-chat";
 *
 * function MyComponent() {
 *   const { openSupportChat } = useSupportChat();
 *
 *   return (
 *     <button onClick={openSupportChat}>
 *       Get Support
 *     </button>
 *   );
 * }
 * ```
 */
export function useSupportChat() {
  const {
    enableChat,
    disableChat,
    toggleChat,
    isEnabled,
    supportName,
    setSupportName,
    supportAvatar,
    setSupportAvatar,
    setOnSendMessage,
  } = useFloatingChat();

  return {
    /**
     * Opens the support chat
     */
    openSupportChat: enableChat,

    /**
     * Closes the support chat
     */
    closeSupportChat: disableChat,

    /**
     * Toggles the support chat open/closed state
     */
    toggleSupportChat: toggleChat,

    /**
     * Current open state of the support chat
     */
    isSupportChatOpen: isEnabled,

    /**
     * Current support agent name
     */
    supportName,

    /**
     * Set the support agent name
     */
    setSupportName,

    /**
     * Current support agent avatar URL
     */
    supportAvatar,

    /**
     * Set the support agent avatar URL
     */
    setSupportAvatar,

    /**
     * Set a custom message handler to process support chat messages
     * @param handler The function to handle messages
     */
    setMessageHandler: setOnSendMessage,
  };
}
