import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] bg-card w-full rounded-md border px-3 py-2 text-sm transition-colors",
          "bg-background placeholder:text-muted-foreground",
          "focus:outline-primary focus: focus:ring-primary focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-primary text-primary focus:ring-primary"
            : "border-input text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
