import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

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
        secendery: "bg-secondary hover:bg-zinc-900    ",
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-[52px]",
        lg: "h-14 text-lg",
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
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
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
