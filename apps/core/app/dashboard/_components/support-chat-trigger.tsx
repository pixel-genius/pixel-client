import { Button } from "@repo/ui/components";
import { useSupportChat } from "@repo/ui/hooks";
import { HelpCircle } from "lucide-react";

interface SupportChatTriggerProps {
  className?: string;
}

export function SupportChatTrigger({ className }: SupportChatTriggerProps) {
  const { openSupportChat } = useSupportChat();

  return (
    <Button
      variant="secondary"
      size="sm"
      className={className}
      onClick={openSupportChat}
    >
      <HelpCircle className="h-4 w-4 mr-2" />
      Get Support
    </Button>
  );
}
