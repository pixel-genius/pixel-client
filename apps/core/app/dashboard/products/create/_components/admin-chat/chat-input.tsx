import { Button, Input } from "@repo/ui/components";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@repo/ui/lib/utils";
import { useRef, useEffect } from "react";

interface ChatInputProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  onSend: () => void;
  // eslint-disable-next-line no-unused-vars
  onKeyDown: (e: React.KeyboardEvent) => void;
  disabled?: boolean;
}

export const ChatInput = ({
  value,
  onChange,
  onSend,
  onKeyDown,
  disabled = false,
}: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input after sending message
  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  // Keep focus after value changes (after sending)
  useEffect(() => {
    if (value === "" && !disabled && inputRef.current) {
      // Small delay to ensure the input is ready
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [value, disabled]);

  return (
    <motion.div className="border-t bg-muted/30 p-4">
      <motion.div
        className="relative flex items-center"
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          className="border-0 bg-background shadow-sm rounded-2xl px-4 py-4  text-base"
          iconRight={
            <Button
              onClick={onSend}
              disabled={!value.trim() || disabled}
              size="icon"
              variant="secondary"
              className="rounded-xl p-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div
                animate={{
                  rotate: value.trim() ? 0 : -45,
                  x: value.trim() ? 0 : -2,
                }}
                transition={{ duration: 0.2 }}
                className={cn(value.trim() && "text-primary")}
              >
                <Send className="h-4 w-4" />
              </motion.div>
            </Button>
          }
        />
      </motion.div>
    </motion.div>
  );
};
