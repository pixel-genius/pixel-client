"use client";

import { useQueryState } from "nuqs";
import React from "react";
import { cn } from "@repo/ui/lib/utils";
import { HiddenModeTab, useTabStore } from "./tab-provider";

type TabContentProps = {
  value: string;
  tabId?: string;
  className?: string;
  children: React.ReactNode;
  hiddenMode?: HiddenModeTab;
};

export const TabContent = ({
  value,
  tabId,
  className,
  children,
  hiddenMode: hiddenModeProp,
}: TabContentProps) => {
  const idStore = useTabStore((s) => s.id);
  const valueStore = useTabStore((s) => s.value);
  const hiddenModeStore = useTabStore((s) => s.hiddenMode);

  const [valueQuery] = useQueryState(tabId || idStore);

  const activeValue = valueQuery || valueStore;
  const hiddenMode = hiddenModeProp || hiddenModeStore;

  const isActive = activeValue === value;

  if (!isActive && hiddenMode === "unmount") return null;

  return (
    <div className={cn("mt-4", { hidden: !isActive }, className)}>
      {children}
    </div>
  );
};
