import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface AdminAvatarProps {
  className?: string;
}

export const AdminAvatar = ({ className = "" }: AdminAvatarProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className={`p-1.5 bg-muted rounded-full mb-1 ${className}`}
    >
      <Bot className="h-4 w-4 text-muted-foreground" />
    </motion.div>
  );
};
