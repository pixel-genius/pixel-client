import { motion } from "framer-motion";
import { AdminAvatar } from "./admin-avatar";

export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-end gap-2 justify-start"
    >
      <AdminAvatar />
      <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
        <div className="flex space-x-1">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-muted-foreground/60 rounded-full"
          />{" "}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-muted-foreground/60 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-muted-foreground/60 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
