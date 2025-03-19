import React from "react";
import { BaseInput, type BaseInputProps } from "../atoms/base-input";
import { LabelWraper } from "./label-wrapper";
import { cn } from "@repo/ui/lib/utils"

export interface textFieldProps extends Omit<BaseInputProps, "error"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, textFieldProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      id,
      className,
      iconLeft,
      iconRight,
      ...resProps
    } = props;

    return (
      <LabelWraper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={cn(className)}
      >
        <div className="flex justify-center items-center relative">
        {iconLeft && (
          <div className="absolute left-0  px-4">{iconLeft}</div>
        )}
        <BaseInput ref={ref} id={id} error={!!error} className={cn(
          {
            "pl-14":  !!iconLeft , 
            "pr-14":  !!iconRight , 
          }
        )} {...resProps} />
        {iconRight && (
          <div className="absolute right-0  px-4">{iconRight}</div>
        )}
        </div>
      </LabelWraper>
    );
  },
);

Input.displayName = "Input";

export { Input };
