/* eslint-disable no-unused-vars */
"use client";

import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";

import React from "react";

import Link from "next/link";

import { Typography } from "../../atoms/typography";
import { useTabStore } from "./tab-provider";

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */

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
  searchParams?: URLSearchParams;
  setSearchParams?: (params: URLSearchParams) => void;
  href?: string;
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
    searchParams,
    setSearchParams,
    href,
  } = props;

  const valueStore = useTabStore((s) => s.value);
  const idStore = useTabStore((s) => s.id);
  const setValueStore = useTabStore((s) => s.setValue);
  const onChangeStore = useTabStore((s) => s.onChange);
  const variantStore = useTabStore((s) => s.variant);

  const variant = variantProps || variantStore;
  const tabId = tabIdProps || idStore;

  const queryValue = searchParams?.get(tabId);
  const activeValue = queryValue || valueStore;
  const isActive = activeValue === value;

  const handleClick = () => {
    if (searchParams && setSearchParams) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(tabId, value);
      setSearchParams(params);
    }
    setValueStore(value);
    onChangeStore?.(value);
    onClick?.();
  };

  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={tabTriggerVariants({ variant, className, isActive })}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={tabTriggerVariants({ variant, className, isActive })}
    >
      {content}
    </button>
  );
};
