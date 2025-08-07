import React from "react";

import BaseMultiSelect, {
  BaseMultiSelectProps,
} from "../atoms/Base-multi-select";
import { LabelWrapper } from "./label-wrapper";

interface MultiSelectProps extends Omit<BaseMultiSelectProps, "error"> {
  id: string;
  /**
   * Label of the multi-select component
   */
  label?: string;
  /**
   * ClassName of the LabelWrapper component
   */
  labelWrapperClassName?: string;
  /**
   * Error Message of the multi-select component
   */
  error?: string;
  /**
   * Helper Text of the multi-select component
   */
  helperText?: string;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ id, label, error, helperText, labelWrapperClassName, ...props }, ref) => {
    return (
      <LabelWrapper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        className={labelWrapperClassName}
      >
        <BaseMultiSelect ref={ref} error={!!error} {...props} />
      </LabelWrapper>
    );
  },
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect };
