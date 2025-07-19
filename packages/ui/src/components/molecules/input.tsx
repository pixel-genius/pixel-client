import React from "react";

import { cn } from "@repo/ui/lib/utils";

import { BaseInput, type BaseInputProps } from "../atoms/base-input";
import OrbitingDotsLoading from "../atoms/orbitingDotsLoading";
import { LabelWraper } from "./label-wrapper";

export interface textFieldProps extends Omit<BaseInputProps, "error"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  classNameWrapper?: string;
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
      loading,
      classNameWrapper,
      ...resProps
    } = props;

    return (
      <LabelWraper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={classNameWrapper}
      >
        <div className="flex justify-center items-center relative">
          {iconLeft &&
            (loading ? (
              <OrbitingDotsLoading />
            ) : (
              <div className="absolute left-0  px-4">{iconLeft}</div>
            ))}
          <BaseInput
            ref={ref}
            id={id}
            error={!!error}
            className={cn(
              {
                "pl-14": !!iconLeft,
                "pr-14": !!iconRight,
              },
              className,
            )}
            {...resProps}
          />
          {iconRight &&
            (loading ? (
              <OrbitingDotsLoading />
            ) : (
              <div className="absolute right-0  px-4">{iconRight}</div>
            ))}
        </div>
      </LabelWraper>
    );
  },
);

Input.displayName = "Input";

export { Input };
