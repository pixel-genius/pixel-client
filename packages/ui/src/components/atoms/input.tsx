import React from "react";
import { BaseInput, BaseInputProps } from "./base-input";
import { Label } from "./label";
import { cn } from "@repo/ui/lib/utils";

export interface InputProps extends BaseInputProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, error, helperText, id, ...resProps } = props;

    const hasHelperText = !!helperText || !!error;

    return (
      <div className="w-full">
        {label && (
          <Label htmlFor={id} className="mb-1 px-1">
            {label}
          </Label>
        )}
        <BaseInput ref={ref} id={id} {...resProps} />
        <span
          className={cn(
            "text-xs mt-1 px-1 hidden",
            hasHelperText && "block",
            !!error && "text-error-400",
          )}
        >
          {error ?? helperText}
        </span>
      </div>
    );
  },
);
