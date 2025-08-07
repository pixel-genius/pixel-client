import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import React from "react";

import { Skeleton } from "./skeleton";

const chipVariants = cva(
  "inline-flex gap-2 items-center justify-center disabled:bg-ring disabled:text-gray-400 whitespace-nowrap text-foreground rounded-lg bg-primary px-3 py-2 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-purple-600 ",
        warning: "bg-warning hover:bg-amber-700    ",
        danger: "bg-rose-500 hover:bg-rose-700   ",
        success: "bg-success hover:bg-emerald-700   ",
        info: "bg-sky-500 hover:bg-sky-700   ",
        secondary: "bg-secondary hover:bg-zinc-900    ",
      },
      size: {
        sm: "h-6 text-sm",
        md: "h-8",
        lg: "h-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);
export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  asChild?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      iconLeft: IconLeft,
      iconRight: IconRight,
      children,
      isLoading,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // Render skeleton state when loading
    if (isLoading) {
      return (
        <div className={chipVariants({ variant, size, className })}>
          {IconLeft && <Skeleton className="w-4 h-4 rounded-sm" />}
          <Skeleton className="w-12 h-3 rounded-sm" />
          {IconRight && <Skeleton className="w-4 h-4 rounded-sm" />}
        </div>
      );
    }

    return (
      <Comp
        className={chipVariants({ variant, size, className })}
        ref={ref}
        {...props}
        disabled={props.disabled}
      >
        {IconLeft && <span>{IconLeft}</span>}
        <span>{children}</span>
        {IconRight && <span> {IconRight}</span>}
      </Comp>
    );
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
