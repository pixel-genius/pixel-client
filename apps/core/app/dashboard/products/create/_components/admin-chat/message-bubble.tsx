import { motion } from "framer-motion";

import { Typography } from "@repo/ui/components/atoms/typography";

import { AdminAvatar } from "./admin-avatar";
import { Message } from "./types";
import { UserAvatar } from "./user-avatar";

interface MessageBubbleProps {
  message: Message;
  index: number;
}

export const MessageBubble = ({ message, index }: MessageBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className={`flex items-end gap-2 ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.sender === "admin" && <AdminAvatar />}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
          message.sender === "user"
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted rounded-bl-md"
        }`}
      >
        <Typography
          component="p"
          variant="paragraph/sm"
          className="whitespace-normal leading-relaxed"
        >
          {message.text}
        </Typography>
        <Typography
          component="span"
          variant="label/xs"
          className={`text-xs mt-2 block ${
            message.sender === "user"
              ? "text-primary-foreground/70"
              : "text-muted-foreground"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </motion.div>

      {message.sender === "user" && <UserAvatar />}
    </motion.div>
  );
};
