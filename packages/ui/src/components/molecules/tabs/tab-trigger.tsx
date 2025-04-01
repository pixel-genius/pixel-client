"use client";

import React from "react";
import { useQueryState } from "nuqs";
import { motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";
import Typography from "../../atoms/typography";
import { useTabStore } from "./tab-provider";

export const DEFAULT_TAB_ID = "tab";

export const tabTriggerVariants = cva(
  "relative px-3 py-3 transition text-muted-foreground ",
  {
    variants: {
      variant: {
        fill: " rounded-lg hover:bg-secondary",
        outline: "",
      },
      isActive: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        isActive: true,
        className: "text-secondary-foreground",
      },
      {
        variant: "outline",
        isActive: true,
        className: "text-primary",
      },
    ],
    defaultVariants: {
      variant: "fill",
    },
  },
);

export const tabActiveTriggerVariants = cva("absolute inset-0", {
  variants: {
    variant: {
      fill: "bg-primary rounded-lg ",
      outline: "border-b-2 border-primary",
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});

export type TabTriggerProps = VariantProps<typeof tabTriggerVariants> & {
  children: React.ReactNode;
  value: string;
  className?: string;
  activeClassName?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  tabId?: string;
  variant?: "fill" | "outline";
  onClick?: () => void;
};

export const TabTrigger = (props: TabTriggerProps) => {
  const {
    children,
    className,
    activeClassName,
    iconLeft,
    iconRight,
    value,
    tabId: tabIdProps,
    variant: variantProps,
    onClick,
  } = props;

  const valueStore = useTabStore((s) => s.value);
  const idStore = useTabStore((s) => s.id);
  const setValueStore = useTabStore((s) => s.setValue);
  const onChangeStore = useTabStore((s) => s.onChange);
  const variantStore = useTabStore((s) => s.variant);

  const variant = variantProps || variantStore;
  const tabId = tabIdProps || idStore;

  const [queryValue, setQueryValue] = useQueryState(tabId);

  const activeValue = queryValue || valueStore;
  const isActive = activeValue === value;

  const handleClick = () => {
    setQueryValue(value);
    setValueStore(value);
    onChangeStore?.(value);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={tabTriggerVariants({ variant, className, isActive })}
    >
      {isActive && (
        <motion.div
          layoutId={tabId}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className={tabActiveTriggerVariants({
            variant,
            className: activeClassName,
          })}
        />
      )}

      <span className="relative flex gap-2 items-center justify-center min-h-6">
        {iconLeft && <span>{iconLeft}</span>}
        <span>
          <Typography variant="label/sm" weight="normal">
            {children}
          </Typography>
        </span>
        {iconRight && <span>{iconRight}</span>}
      </span>
    </button>
  );
};
