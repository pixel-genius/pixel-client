import * as React from "react";

import { cn } from "@repo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof baseInputVariants> {
  error?: boolean;
}

export const baseInputVariants = cva(
  "flex h-10 w-full bg-card rounded-md border border-border ring-offset-background file:border-0 file:bg-transparent  transition-shadow duration-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm file:text-sm placeholder:text-muted-foreground font-normal file:font-medium focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      size: {
        sm: "px-4 py-2.5 h-9",
        md: "px-4 py-2.5 h-[52px]",
        lg: "px-4 py-4 h-14",
      },
      error: {
        true: "ring-2 ring-error focus-visible:ring-error focus-visible:ring-offset-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const { size, className, type, error, ...resProps } = props;

    return (
      <input
        type={type}
        className={cn(baseInputVariants({ size, error, className }))}
        ref={ref}
        {...resProps}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
