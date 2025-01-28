import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";
import { IconProps } from "@repo/icons/types";
import OrbitingDotsLoading from "./orbitingDotsLoading";

const buttonVariants = cva(
  "inline-flex items-center min-w-[64px] transition-all focus-visible:outline-none  duration-300 justify-center gap-2 whitespace-nowrap text-sm transition-colors px-3 py-4 transition focus:ring focus:ring-primary relative disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white rounded-lg hover:bg-purple-600 disabled:text-gray-400 disabled:bg-gray-200 ",
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
    },
    compoundVariants: [
      {
        variant: "primary",
        isLoading: true,
        className: "!bg-primary hover:!bg-primary",
      },
      {
        variant: "secondary",
        isLoading: true,
        className: "!bg-secondary hover:!bg-secondary ",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonStatusColor = "success" | "warning" | "error";

const statusColorHandler = ({
  statusColor,
  variant,
  disabled,
}: {
  variant?: "primary" | "secondary" | "tertiary" | null;
  statusColor?: ButtonStatusColor;
  disabled?: boolean;
}): string | undefined => {
  if (disabled) return "";

  switch (variant) {
    case "secondary":
    case "tertiary":
      if (statusColor === "success") return "text-success focus:ring-success";
      if (statusColor === "warning") return "text-warning focus:ring-warning";
      if (statusColor === "error") return "text-error focus:ring-error";
      break;
    case "primary":
    default:
      if (statusColor === "success") return "!bg-success hover:!bg-emerald-700  focus:ring-success";
      if (statusColor === "warning") return "!bg-warning hover:bg-amber-700 focus:ring-warning";
      if (statusColor === "error") return "!bg-error hover:bg-rose-700 focus:ring-error";
      break;
  }
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  statusColor?: ButtonStatusColor;
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
      statusColor,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const statusColorHandlerMemo = React.useMemo(
      () => statusColorHandler,
      [props.disabled, variant, statusColor],
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, isLoading, className }),
          statusColorHandlerMemo({
            statusColor,
            variant,
            disabled: props.disabled,
          }),
        )}
        ref={ref}
        {...props}
        disabled={isLoading || props.disabled}
      >
        {IconLeft && <span className={cn(isLoading && "invisible")}>{IconLeft}</span>}
        <span className={cn(isLoading && "invisible")}>{children}</span>
        {isLoading && (
          <span className="absolute  ">
            <OrbitingDotsLoading />
          </span>
        )}
        {IconRight && <span className={cn(isLoading && "invisible")}> {IconRight}</span>}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
