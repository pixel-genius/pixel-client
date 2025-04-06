"use client";

import * as React from "react";
import * as BaseSelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@repo/ui/lib/utils";
import { baseInputVariants } from "./base-input";

const BaseSelect = BaseSelectPrimitive.Root;

const BaseSelectGroup = BaseSelectPrimitive.Group;

const BaseSelectValue = BaseSelectPrimitive.Value;

const BaseSelectTrigger = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.Trigger> & {
    size?: "sm" | "md" | "lg";
    error?: boolean | undefined;
  }
>(({ className, children, size = "sm", error, ...props }, ref) => (
  <BaseSelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-lg border border-input  px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      baseInputVariants({ size, error }),
      className,
    )}
    {...props}
  >
    {children}
    <BaseSelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </BaseSelectPrimitive.Icon>
  </BaseSelectPrimitive.Trigger>
));
BaseSelectTrigger.displayName = BaseSelectPrimitive.Trigger.displayName;

const BaseSelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <BaseSelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </BaseSelectPrimitive.ScrollUpButton>
));
BaseSelectScrollUpButton.displayName =
  BaseSelectPrimitive.ScrollUpButton.displayName;

const BaseSelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <BaseSelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </BaseSelectPrimitive.ScrollDownButton>
));
BaseSelectScrollDownButton.displayName =
  BaseSelectPrimitive.ScrollDownButton.displayName;

const BaseSelectContent = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <BaseSelectPrimitive.Portal>
    <BaseSelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative  z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-card text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <BaseSelectScrollUpButton />
      <BaseSelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </BaseSelectPrimitive.Viewport>
      <BaseSelectScrollUpButton />
    </BaseSelectPrimitive.Content>
  </BaseSelectPrimitive.Portal>
));
BaseSelectContent.displayName = BaseSelectPrimitive.Content.displayName;

const BaseSelectLabel = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <BaseSelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8  pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
BaseSelectLabel.displayName = BaseSelectPrimitive.Label.displayName;

const BaseSelectItem = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <BaseSelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full  cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-background focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <BaseSelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </BaseSelectPrimitive.ItemIndicator>
    </span>

    <BaseSelectPrimitive.ItemText>{children}</BaseSelectPrimitive.ItemText>
  </BaseSelectPrimitive.Item>
));
BaseSelectItem.displayName = BaseSelectPrimitive.Item.displayName;

const BaseSelectSeparator = React.forwardRef<
  React.ElementRef<typeof BaseSelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseSelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <BaseSelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
BaseSelectSeparator.displayName = BaseSelectPrimitive.Separator.displayName;

export {
  BaseSelect,
  BaseSelectGroup,
  BaseSelectValue,
  BaseSelectTrigger,
  BaseSelectContent,
  BaseSelectLabel,
  BaseSelectItem,
  BaseSelectSeparator,
  BaseSelectScrollUpButton,
  BaseSelectScrollDownButton,
};
