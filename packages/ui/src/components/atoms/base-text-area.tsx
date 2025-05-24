import * as React from "react";

import { cn } from "@repo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface BaseTextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof baseTextAreaVariants> {
  error?: boolean;
  rows?: number;
}

export const baseTextAreaVariants = cva(
  "flex w-full bg-card rounded-md border border-border ring-offset-background file:border-0 file:bg-transparent transition-shadow duration-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm file:text-sm placeholder:text-muted-foreground font-normal file:font-medium focus:ring-2 focus:ring-primary focus:ring-offset-2 px-4 py-2.5",
  {
    variants: {
      error: {
        true: "ring-2 ring-error focus-visible:ring-error focus-visible:ring-offset-2",
      },
    },
  },
);

const BaseTextArea = React.forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
  (props, ref) => {
    const { className, error, rows = 1, ...resProps } = props;

    return (
      <textarea
        className={cn(baseTextAreaVariants({ error, className }))}
        ref={ref}
        rows={rows}
        {...resProps}
      />
    );
  },
);

BaseTextArea.displayName = "BaseTextArea";

export { BaseTextArea };
