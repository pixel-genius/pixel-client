import { Typography } from "@repo/ui/components/atoms/typography";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ChatHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-muted rounded-lg">
          <MessageCircle className="h-6 w-6 text-foreground" />
        </div>
        <Typography component="h2" variant="heading/lg" weight="bold">
          Admin Chat
        </Typography>
      </div>
      <Typography
        component="p"
        variant="paragraph/md"
        className="text-muted-foreground"
      >
        Chat with our admin team for any questions about your product
        submission.
      </Typography>
    </motion.div>
  );
};
