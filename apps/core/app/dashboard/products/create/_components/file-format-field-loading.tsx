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
    <div className="container mx-auto pt-9" aria-busy="true">
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} className={"w-8 h-8"} />
        ))}
      </div>
    </div>
  );
};
