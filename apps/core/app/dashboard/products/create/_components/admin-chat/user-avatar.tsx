import { User } from "lucide-react";
import { motion } from "framer-motion";

interface UserAvatarProps {
  className?: string;
}

export const UserAvatar = ({ className = "" }: UserAvatarProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className={`p-1.5 bg-primary/20 rounded-full mb-1 ${className}`}
    >
      <User className="h-4 w-4 text-primary" />
    </motion.div>
  );
};
