import * as React from "react";

import { cn } from "@repo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof baseInputVariants> {
      error?: boolean;
    }

export const baseInputVariants = cva("", {
  variants: {
    size: {
      sm: "px-4 py-2.5 h-9",
      md: "px-4 py-2.5 h-[52px]",
      lg: "px-4 py-4 h-14",
    },
    error:{
      true: "ring-2 ring-error focus-visible:ring-error focus-visible:ring-offset-2",
    }
  },
  defaultVariants: {
    size: "md",
  },
});

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const { size, className, type, error , ...resProps } = props;

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border  border-border ring-offset-background file:border-0 file:bg-transparent  transition-shadow duration-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          "bg-card  text-foreground",
          "text-sm file:text-sm placeholder:text-muted-foreground font-normal file:font-medium",
          "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          baseInputVariants({ size,error, className }),
        )}
        ref={ref}
        {...resProps}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
