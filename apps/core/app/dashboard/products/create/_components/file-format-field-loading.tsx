"use client";

import React from "react";

import { Skeleton } from "@repo/ui/components/atoms/skeleton";

export interface FileFormatFieldLoadingProps {
  count: number;
}

export const FileFormatFieldLoading: React.FC<FileFormatFieldLoadingProps> = ({
  count,
}) => {
  return (
    <div className="flex gap-2" aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 h-6"
        >
          {/* Icon skeleton */}
          <Skeleton className="w-4 h-4 rounded-sm" />
          {/* Text skeleton */}
          <Skeleton className="w-12 h-3 rounded-sm" />
        </div>
      ))}
    </div>
  );
};
