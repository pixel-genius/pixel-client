"use client";

import React from "react";

import { cn } from "@repo/ui/lib/utils";

export const TabList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex mb-4 flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-2 whitespace-nowrap",
        className,
      )}
    >
      {children}
    </div>
  );
};
