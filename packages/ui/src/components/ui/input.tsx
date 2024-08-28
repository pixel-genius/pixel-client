import React from "react";
import { BaseInput, BaseInputProps } from "./base-input";
import { Label } from "./label";

export interface InputProps extends BaseInputProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
}

export const Input = (props: InputProps) => {
  const { label, helperText, id, ...resProps } = props;

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label  htmlFor={id}>{props.label}</Label>
      <BaseInput id={id} {...resProps} />
      <span>{helperText}</span>
    </div>
  );
};
