import React from "react";
import { BaseInput, BaseInputProps } from "../atoms/base-input";
import { LabelWraper } from "./label-wrapper";

export interface textFieldProps extends Omit<BaseInputProps, "error"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, textFieldProps>(
  (props, ref) => {
    const { label, error, helperText, id, className, ...resProps } = props;

    return (
      <LabelWraper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={className}
      >
        <BaseInput ref={ref} id={id} error={!!error} {...resProps} />
      </LabelWraper>
    );
  },
);

Input.displayName = "Input";

export { Input };
