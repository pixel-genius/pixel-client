"use client";

import { type VariantProps } from "class-variance-authority";
import {
  CheckIcon,
  ChevronDown,
  ChevronUp,
  PlusIcon,
  XCircle,
  XIcon,
} from "lucide-react";
import * as React from "react";

import { cn } from "@repo/ui/lib/utils";
import { baseInputVariants } from "./base-input";
import { Button } from "./button";
import { Chip, chipVariants } from "./chip";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";

/**
 * Props for MultiSelect component
 */
export interface BaseMultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  chipVariant?: VariantProps<typeof chipVariants>["variant"];
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /**
   * Size of the multi-select component
   *
   */
  size?: "sm" | "md" | "lg";

  /**
   * If true no chevron icon will be displayed
   *
   */
  noChevronIcon?: boolean;

  /** The default selected values when the component mounts. */
  defaultValue?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * Error flag for styling error input of MultiSelect component
   */
  error?: boolean | undefined;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * If true, renders the multi-select component as a child of another component.
   * Optional, defaults to false.
   */
  asChild?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
}
const BaseMultiSelect = React.forwardRef<
  HTMLButtonElement,
  BaseMultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      chipVariant = "secondary",
      defaultValue = [],
      placeholder = "Select options",
      animation = 2,
      maxCount = 3,
      noChevronIcon,
      disabled,
      modalPopover = false,
      className,
      size = "sm",
      error,
      ...props
    },
    ref,
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);

    const [optionsState, setOptionsState] =
      React.useState<BaseMultiSelectProps["options"]>(options);

    const [searchOptionInput, setSearchOptionInput] =
      React.useState<string>("");

    const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean>(false);

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter((value) => value !== option)
        : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === optionsState.length) {
        handleClear();
      } else {
        const allValues = optionsState.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

    return (
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            ref={ref}
            {...props}
            onClick={handleTogglePopover}
            iconRight={
              <span className="inline-flex h-full items-center">
                {selectedValues.length > 0 ? (
                  <div className="flex items-center justify-between">
                    <XIcon
                      className="h-4 cursor-pointer text-muted-foreground"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClear();
                      }}
                    />
                  </div>
                ) : null}
                {noChevronIcon ? null : isPopoverOpen ? (
                  <ChevronUp className="h-4 w-4 cursor-pointer text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 cursor-pointer text-muted-foreground" />
                )}
              </span>
            }
            className={cn(
              "flex w-full rounded-md focus:ring-2 focus:ring-primary disabled:!text-white border items-center justify-between bg-card hover:bg-card disabled:opacity-50 disabled:!bg-card [&_svg]:pointer-events-auto",
              baseInputVariants({ size, error }),
              className,
            )}
          >
            {selectedValues.length > 0 ? (
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-wrap items-center">
                  {selectedValues.slice(0, maxCount).map((value) => {
                    const option = optionsState.find((o) => o.value === value);
                    return (
                      <Chip
                        key={value}
                        className={"h-4"}
                        style={{ animationDuration: `${animation}s` }}
                        size={null}
                        variant={chipVariant}
                        iconRight={
                          <XCircle
                            className="ml-2 h-4 w-4 cursor-pointer"
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleOption(value);
                            }}
                          />
                        }
                      >
                        {option?.label}
                      </Chip>
                    );
                  })}
                  {selectedValues.length > maxCount && (
                    <Chip
                      className={cn(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent h-4",
                      )}
                      style={{ animationDuration: `${animation}s` }}
                      size={null}
                      iconRight={
                        <XCircle
                          className="ml-2 h-4 w-4 cursor-pointer"
                          onClick={(event) => {
                            event.stopPropagation();
                            clearExtraOptions();
                          }}
                        />
                      }
                    >
                      {`+ ${selectedValues.length - maxCount} more`}
                    </Chip>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full mx-auto">
                <span className="text-sm">{placeholder}</span>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[--radix-popover-trigger-width] p-0"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandInput
              placeholder="Search..."
              onKeyDown={handleInputKeyDown}
              value={searchOptionInput}
              onChangeCapture={(e) => {
                setSearchOptionInput(e.currentTarget.value.trim());
              }}
            />
            <CommandList>
              <CommandEmpty className="p-1">
                <Button
                  className="w-full rounded-none"
                  size="sm"
                  iconLeft={<PlusIcon />}
                  onClick={() => {
                    setOptionsState((prev) => [
                      ...prev,
                      {
                        label: searchOptionInput,
                        value: searchOptionInput.toLowerCase(),
                      },
                    ]);
                    setSelectedValues((prev) => [
                      ...prev,
                      searchOptionInput.toLowerCase(),
                    ]);
                    setSearchOptionInput("");
                  }}
                >
                  Add
                </Button>
              </CommandEmpty>
              <CommandGroup>
                {optionsState.length ? (
                  <>
                    <CommandItem
                      key="all"
                      onSelect={toggleAll}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          selectedValues.length === optionsState.length
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <span>(Select All)</span>
                    </CommandItem>
                    {optionsState.map((option) => {
                      const isSelected = selectedValues.includes(option.value);
                      return (
                        <CommandItem
                          key={option.value}
                          onSelect={() => toggleOption(option.value)}
                          className="cursor-pointer"
                        >
                          <div
                            className={cn(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible",
                            )}
                          >
                            <CheckIcon className="h-4 w-4" />
                          </div>
                          {option.icon && (
                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          )}
                          <span>{option.label}</span>
                        </CommandItem>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </CommandGroup>
              {optionsState.length ? (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <div className="flex items-center justify-between">
                      {selectedValues.length > 0 && (
                        <>
                          <CommandItem
                            onSelect={handleClear}
                            className="flex-1 justify-center cursor-pointer"
                          >
                            Clear
                          </CommandItem>
                          <Separator
                            orientation="vertical"
                            className="flex min-h-6 h-full"
                          />
                        </>
                      )}
                      <CommandItem
                        onSelect={() => setIsPopoverOpen(false)}
                        className="flex-1 justify-center cursor-pointer max-w-full"
                      >
                        Close
                      </CommandItem>
                    </div>
                  </CommandGroup>
                </>
              ) : null}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

BaseMultiSelect.displayName = "BaseMultiSelect";

export default BaseMultiSelect;
