"use client";

import {
  BaseInput,
  BaseInputProps,
} from "@repo/ui/components/atoms/base-input";
import { useSearchStore } from "../_store/search-store";
import { AnimatePresence, motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

export type SearchBoxProps = BaseInputProps;

export const SearchBox = (props: SearchBoxProps) => {
  const { setIsSearchMode, isSearchMode } = useSearchStore();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className="relative z-[9999]"
        layoutId="search-box"
        transition={{
          layout: {
            duration: 0.75,
            type: "spring",
            bounce: 0.2,
            delay: 0.25,
            stiffness: 100,
            damping: 10,
          },
        }}
      >
        <motion.div className="w-full">
          <BaseInput
            autoFocus={isSearchMode}
            placeholder="Search UI kits, website templates, icons, 3D assets..."
            {...props}
            className={cn(props.className, "w-full")}
            onFocus={() => setIsSearchMode(true)}
          />
        </motion.div>
        <motion.div className="absolute right-4 top-0 bottom-0 flex items-center justify-center">
          <SearchIcon size={20} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
