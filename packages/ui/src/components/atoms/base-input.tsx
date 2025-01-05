import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          "font-normal text-xs", 
          // "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
