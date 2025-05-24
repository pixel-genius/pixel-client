import React from "react";
import { BaseTextArea, type BaseTextAreaProps } from "../atoms/base-text-area";
import { LabelWraper } from "./label-wrapper";
import { cn } from "@repo/ui/lib/utils";

export interface textAreaProps extends Omit<BaseTextAreaProps, "error"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, textAreaProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      id,
      className,
      loading,
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
          <BaseTextArea
            ref={ref}
            id={id}
            error={!!error}
            {...resProps}
          />
        </div>
      </LabelWraper>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
