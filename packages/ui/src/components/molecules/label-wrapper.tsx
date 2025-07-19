"use client";

import * as LabelPrimitive from "@radix-ui/react-label";

import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

import { Label } from "../atoms/label";
import { Typography } from "../atoms/typography";

export interface LabelWraperProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  label?: React.ReactNode;
  error?: string;
  helperText?: React.ReactNode;
  required?: boolean;
}

const LabelWraper = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelWraperProps
>(
  (
    {
      className,
      children,
      error,
      helperText,
      id,
      label,
      required = false,
      ...props
    },
    ref,
  ) => (
    <div className={cn("relative w-full flex flex-col", className)}>
      {/* Label */}
      <Label
        ref={ref}
        htmlFor={id}
        className=" px-1 flex gap-1 text-muted-foreground  mb-2"
        {...props}
      >
        <Typography component="span" variant="label/sm">
          {label}
        </Typography>
        {required && (
          <Typography component="span" className="text-error">
            *
          </Typography>
        )}
      </Label>

      {/* Component */}
      {children}

      {/* Helper Text */}
      <span
        className={cn(
          "hidden",
          "relative  mt-1  text-muted-foreground px-1",
          (helperText || !!error) && "block",
          !!error && "dark:text-error-400  text-error-500",
        )}
      >
        <Typography component="span" variant="label/xs" className="">
          {error || helperText}
        </Typography>
      </span>
    </div>
  ),
);

LabelWraper.displayName = "LabelWraper";

export { LabelWraper };
