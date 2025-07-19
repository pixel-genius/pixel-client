import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { Typography } from "@repo/ui/components/atoms/typography";

export const ChatGuidelines = () => {
  return (
    <motion.div className="mt-6 p-6 bg-muted/50 rounded-xl border">
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="p-2 bg-muted rounded-lg"
        >
          <MessageCircle className="h-5 w-5 text-muted-foreground" />
        </motion.div>
        <div className="flex-1">
          <Typography
            component="p"
            variant="label/sm"
            weight="medium"
            className="mb-2"
          >
            Chat Guidelines
          </Typography>
          <div className="space-y-1">
            <Typography
              component="p"
              variant="paragraph/sm"
              className="text-muted-foreground"
            >
              • Our admin team typically responds within 2-4 hours during
              business hours
            </Typography>
            <Typography
              component="p"
              variant="paragraph/sm"
              className="text-muted-foreground"
            >
              • Please provide detailed information about your product questions
            </Typography>
            <Typography
              component="p"
              variant="paragraph/sm"
              className="text-muted-foreground"
            >
              • You can attach screenshots or files if needed for clarification
            </Typography>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
