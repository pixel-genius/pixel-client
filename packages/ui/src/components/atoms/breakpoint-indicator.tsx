"use client";

import { FC } from "react";

export const BreakpointIndicator: FC = () => {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-16 right-3 z-[9999] text-xs bg-black text-white pr-1 pl-2 py-2 rounded-md opacity-75 pointer-events-none capitalize font-bold">
      <span className="text-xs text-muted-foreground mr-2">Breakpoint: </span>
      {/* add animation init */}
      <span className="hidden sm:inline md:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        SM
      </span>
      <span className="hidden md:inline lg:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        MD
      </span>
      <span className="hidden lg:inline xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        LG
      </span>
      <span className="hidden xl:inline 2xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        XL
      </span>
      <span className="hidden 2xl:inline 3xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        2XL
      </span>
      <span className="hidden 3xl:inline 4xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        3XL
      </span>
      <span className="hidden 4xl:inline 5xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        4XL
      </span>
      <span className="hidden 5xl:inline 6xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        5XL
      </span>
      <span className="hidden 6xl:inline 7xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        6XL
      </span>
      <span className="hidden 7xl:inline 8xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        7XL
      </span>
      <span className="hidden 8xl:inline 9xl:hidden animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        8XL
      </span>
      <span className="hidden 9xl:inline animate-in fade-in-0 duration-1000 bg-muted p-1 rounded px-2">
        9XL
      </span>
    </div>
  );
};
