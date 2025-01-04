import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@repo/ui/lib/utils";
import { IconProps } from "@repo/icons/types";
// import OrbitingDotsLoading from "./orbitingDotsLoading";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors px-3 py-4 transition focus:ring focus:ring-primary-600 relative ",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white rounded-lg hover:bg-primary-400 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed",
        secondary:
          "bg-secondary rounded-lg text-secondary-foreground hover:bg-gray-300 hover:text-secondary focus:bg-gray-200 focus:text-secondary disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed",
        tertiary:
          "bg-transparent text-white rounded-full hover:bg-accent hover:text-accent-foreground disabled:text-gray-700 disabled:cursor-not-allowed",
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-[52px]",
        lg: "h-14 text-lg",
      },
    },
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
      if (statusColor === "success") return "text-success-500";
      if (statusColor === "warning") return "text-warning-500";
      if (statusColor === "error") return "text-error-500";
      break;
    case "primary":
    default:
      if (statusColor === "success") return "bg-success-500";
      if (statusColor === "warning") return "bg-warning-500";
      if (statusColor === "error") return "bg-error-500";
      break;
  }
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: (props: IconProps) => JSX.Element;
  iconRight?: (props: IconProps) => JSX.Element;
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
          buttonVariants({ variant, size, className }),
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
        {IconLeft && <IconLeft className={cn(isLoading && "invisible")} />}
        <span className={cn(isLoading && "invisible")}>{children}</span>
        {isLoading && (
          <span className="absolute">
            {/* <OrbitingDotsLoading /> */}
          </span>
        )}
        {IconRight && <IconRight className={cn(isLoading && "invisible")} />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };