"use client";

import React from "react";
import { cn } from "@repo/ui/lib/utils";
import { HiddenModeTab, useTabStore } from "./tab-provider";

type TabContentProps = {
  value: string;
  tabId?: string;
  className?: string;
  children: React.ReactNode;
  hiddenMode?: HiddenModeTab;
  searchParams?: URLSearchParams;
};

export const TabContent = ({
  value,
  tabId,
  className,
  children,
  hiddenMode: hiddenModeProp,
  searchParams,
}: TabContentProps) => {
  const idStore = useTabStore((s) => s.id);
  const valueStore = useTabStore((s) => s.value);
  const hiddenModeStore = useTabStore((s) => s.hiddenMode);

  const valueQuery = searchParams?.get(tabId || idStore);

  const activeValue = valueQuery || valueStore;
  const hiddenMode = hiddenModeProp || hiddenModeStore;

  const isActive = activeValue === value;

  if (!isActive && hiddenMode === "unmount") return null;

  return <div className={cn({ hidden: !isActive }, className)}>{children}</div>;
};
