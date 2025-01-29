import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";
import OrbitingDotsLoading from "./orbitingDotsLoading";

const buttonVariants = cva(
  "inline-flex   items-center justify-center min-w-[64px] transition-all focus-visible:outline-none  duration-300  gap-2 whitespace-nowrap text-sm  px-3 py-4 focus:ring focus:ring-primary relative disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white rounded-lg hover:bg-purple-600 disabled:text-gray-400 disabled:!bg-gray-200 ",
        secondary:
          "bg-secondary rounded-lg text-secondary-foreground hover:bg-zinc-900 disabled:text-gray-400 disabled:bg-secondary  ",
        tertiary:
          "bg-transparent text-white rounded-lg disabled:text-gray-700 ",
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-[52px]",
        lg: "h-14 text-lg",
      },
      isLoading: {
        true: "!text-foreground",
        false: "",
      },
      state: {
        success: "focus:ring-success",
        warning: "focus:ring-warning",
        error: "focus:ring-error",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        isLoading: true,
        className: "!bg-primary pointer-events-none",
      },
      {
        variant: "secondary",
        isLoading: true,
        className: "!bg-secondary pointer-events-none",
      },
      // state
      {
        variant: "primary",
        state: "success",
        className: "!bg-success hover:!bg-emerald-700 focus:ring-success",
      },
      {
        variant: "primary",
        state: "warning",
        className: "!bg-warning hover:!bg-amber-700 focus:ring-warning",
      },
      {
        variant: "primary",
        state: "error",
        className: "!bg-error hover:!bg-rose-700 focus:ring-error",
      },
      {
        variant: ["secondary", "tertiary"],
        state: "success",
        className: "text-success focus:ring-success",
      },
      {
        variant: ["secondary", "tertiary"],
        state: "warning",
        className: "text-warning focus:ring-warning",
      },
      {
        variant: ["secondary", "tertiary"],
        state: "error",
        className: "text-error focus:ring-error",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonState = "success" | "warning" | "error";


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  state?: ButtonState;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      children,
      iconLeft: IconLeft,
      iconRight: IconRight,
      state,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, isLoading, state, className }),
        )}
        ref={ref}
        {...props}
        disabled={props.disabled}
      >
        <div className="text-ellipsis" />
        {IconLeft && (
          <span className={cn(isLoading && "invisible")}>{IconLeft}</span>
        )}
        <span className={cn(isLoading && "invisible")}>{children}</span>
        {isLoading && (
          <span className="absolute  ">
            <OrbitingDotsLoading />
          </span>
        )}
        {IconRight && (
          <span className={cn(isLoading && "invisible")}> {IconRight}</span>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
