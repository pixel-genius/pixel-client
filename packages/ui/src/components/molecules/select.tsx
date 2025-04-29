import { SelectProps as RadixSelectProps } from "@radix-ui/react-select";
import * as React from "react";
import {
  BaseSelect,
  BaseSelectContent,
  BaseSelectGroup,
  BaseSelectItem,
  BaseSelectLabel,
  BaseSelectTrigger,
  BaseSelectValue,
} from "../atoms/base-select";
import { LabelWraper } from "./label-wrapper";

interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  group?: string;
}

type OptionWithoutGroup = Omit<Option, "group">;

interface SerializedOption {
  [key: string]: OptionWithoutGroup[];
}

interface SelectProps extends RadixSelectProps {
  id: string;
  label?: string;
  className?: string;
  labelWraperClassName?: string;
  error?: string;
  placeholder: string;
  value?: string;
  size?: "sm" | "md" | "lg";
  helperText?: string;
  options: Option[];
}

const Select = ({
  id,
  options,
  label,
  className,
  value,
  placeholder,
  labelWraperClassName,
  error,
  helperText,
  size,
  ...props
}: SelectProps) => {
  const serializedOptions = React.useMemo(() => {
    const serializdOptionsObj: SerializedOption = {};
    if (options.length)
      options.forEach((option) => {
        const groupKey = option?.group;

        if (groupKey) {
          if (groupKey in serializdOptionsObj) {
            serializdOptionsObj[groupKey]!.push(option);
          } else serializdOptionsObj[groupKey] = [option];
        } else {
          if (serializdOptionsObj.noGroup)
            serializdOptionsObj.noGroup.push(option);
          else serializdOptionsObj.noGroup = [option];
        }
      });

    return serializdOptionsObj;
  }, [options]);
  const serializedOptionsKeyArr = Object.keys(serializedOptions);

  const renderSelectItem = React.useCallback(
    (groupKey?: string) =>
      serializedOptions?.[groupKey || "noGroup"]?.map((option, index) => (
        <BaseSelectItem key={`select-option-${index}`} value={option.value}>
          {option.icon && (
            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{option.label}</span>
        </BaseSelectItem>
      )) || null,
    [options],
  );

  return (
    <LabelWraper
      id={id}
      label={label}
      error={error}
      helperText={helperText}
      className={labelWraperClassName}
    >
      <BaseSelect value={value} {...props}>
        <BaseSelectTrigger className={className} size={size} error={!!error}>
          <BaseSelectValue placeholder={placeholder} />
        </BaseSelectTrigger>
        {serializedOptionsKeyArr.length ? (
          <BaseSelectContent>
            {serializedOptionsKeyArr.map((groupKey, index) =>
              groupKey === "noGroup" ? (
                renderSelectItem()
              ) : (
                <BaseSelectGroup key={`select-group-${index}`}>
                  <BaseSelectLabel>{groupKey}</BaseSelectLabel>
                  {renderSelectItem(groupKey)}
                </BaseSelectGroup>
              ),
            )}
          </BaseSelectContent>
        ) : null}
      </BaseSelect>
    </LabelWraper>
  );
};

Select.displayName = "Select";

export { Select };
