import React from "react";
import BaseMultiSelect, {
  BaseMultiSelectProps,
} from "../atoms/Base-multi-select";
import { LabelWraper } from "./label-wrapper";

interface MultiSelectProps extends Omit<BaseMultiSelectProps, "error"> {
  id: string;
  /**
   * Label of the multi-select component
   */
  label?: string;
  /**
   * ClassName of the LabelWrapper component
   */
  labelWraperClassName?: string;
  /**
   * Error Messege of the multi-select component
   */
  error?: string;
  /**
   * Helper Text of the multi-select component
   */
  helperText?: string;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ id, label, error, helperText, labelWraperClassName, ...props }, ref) => {
    return (
      <LabelWraper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={labelWraperClassName}
      >
        <BaseMultiSelect ref={ref} error={!!error} {...props} />
      </LabelWraper>
    );
  },
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect };
