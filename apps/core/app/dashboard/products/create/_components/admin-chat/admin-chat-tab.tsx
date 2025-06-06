import { motion } from "framer-motion";
import {
  ChatHeader,
  ChatMessages,
  ChatInput,
  ChatGuidelines,
  useChat,
} from "./index";

export const AdminChatTab = () => {
  const {
    messages,
    newMessage,
    isTyping,
    setNewMessage,
    handleSendMessage,
    handleKeyDown,
  } = useChat();

  return (
    <motion.div className="flex flex-col h-full">
      <ChatHeader />

      {/* Chat Container with flexible height */}
      <motion.div className="border rounded-xl bg-card shadow-sm flex flex-col flex-1 min-h-0">
        <ChatMessages messages={messages} isTyping={isTyping} />

        <ChatInput
          value={newMessage}
          onChange={setNewMessage}
          onSend={handleSendMessage}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
        />
      </motion.div>

      <ChatGuidelines />
    </motion.div>
  );
};
