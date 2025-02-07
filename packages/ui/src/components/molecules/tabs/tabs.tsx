"use client";

import { useState } from "react";
import { cn } from "@repo/ui/lib/utils";
import { TabTrigger } from "./tab-trigger";
import { TabContent } from "./tab-content";

export type Tab = {
  title: string;
  value: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  variant,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  variant?: "fill" | "outline";
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveSelectedTabToTop = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-2",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <TabTrigger
            title={tab.title}
            idx={idx}
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            activeIndex={activeIndex}
            activeClassName={activeTabClassName}
            className={tabClassName}
            variant={variant}
            iconLeft={tab.iconLeft}
            iconRight={tab.iconRight}
          />
        ))}
      </div>

      <TabContent
        tabs={propTabs}
        activeIndex={activeIndex}
        className={cn("mt-5", contentClassName)}
      />
    </>
  );
};
