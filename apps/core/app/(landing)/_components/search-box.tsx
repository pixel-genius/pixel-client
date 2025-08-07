"use client";

import {
  BaseInput,
  BaseInputProps,
} from "@repo/ui/components/atoms/base-input";
import { useSearchStore } from "../_store/search-store";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

// Blinking cursor component with CSS animation
const BlinkingCursor = () => (
  <span className="inline-block w-0.5 h-4 bg-muted-foreground ml-0.5 animate-caret-blink" />
);

// Custom hook for typewriter effect
const useTypewriter = (
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Don't run animation if no texts provided
    if (!texts.length) {
      return;
    }

    const currentText = texts[currentTextIndex];

    const typeWriter = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentText && displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(typeWriter, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          timeoutRef.current = setTimeout(
            () => setIsDeleting(true),
            pauseDuration,
          );
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeoutRef.current = setTimeout(typeWriter, deletingSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeoutRef.current = setTimeout(
      typeWriter,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return { text: displayText, isActive: texts.length > 0 };
};

// TypewriterPlaceholder component props
type TypewriterPlaceholderProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  isVisible: boolean;
  prefix?: string;
  className?: string;
};

// Reusable TypewriterPlaceholder component
const TypewriterPlaceholder = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
  isVisible,
  prefix = "Search",
  className = "",
}: TypewriterPlaceholderProps) => {
  const typewriter = useTypewriter(
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  );

  if (!isVisible || !typewriter.isActive) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center px-5 text-sm pointer-events-none text-muted-foreground",
        className,
      )}
    >
      <span>
        {prefix} <span>{typewriter.text}</span>
      </span>
      <BlinkingCursor />
    </div>
  );
};

export type SearchBoxProps = BaseInputProps & {
  /** Enable typewriter animation effect for placeholder text */
  enableTypewriter?: boolean;
  /** Custom placeholder texts for typewriter animation (only used when enableTypewriter is true) */
  typewriterTexts?: string[];
  /** Static placeholder text (used when enableTypewriter is false) */
  staticPlaceholder?: string;
  /** Typing speed in milliseconds (default: 80) */
  typingSpeed?: number;
  /** Deleting speed in milliseconds (default: 40) */
  deletingSpeed?: number;
  /** Pause duration between typing and deleting in milliseconds (default: 1500) */
  pauseDuration?: number;
};

export const SearchBox = (props: SearchBoxProps) => {
  const {
    enableTypewriter = false,
    typewriterTexts = [
      "UI Kits...",
      "Templates...",
      "Icons...",
      "3D Assets...",
      "Components...",
      "Illustrations...",
    ],
    staticPlaceholder = "Search UI Kits, Templates, Icons, 3D Assets...",
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1500,
    ...baseInputProps
  } = props;

  const { setIsSearchMode, isSearchMode } = useSearchStore();

  // Determine the placeholder text to use
  // When typewriter is enabled, we'll use the overlay, so hide the default placeholder
  const placeholderText = enableTypewriter ? "" : staticPlaceholder;

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
        <motion.div className="w-full relative">
          <BaseInput
            autoFocus={isSearchMode}
            placeholder={placeholderText}
            {...baseInputProps}
            className={cn(baseInputProps.className, "w-full")}
            onFocus={() => setIsSearchMode(true)}
          />
          {/* TypewriterPlaceholder component */}
          <TypewriterPlaceholder
            texts={typewriterTexts}
            typingSpeed={typingSpeed}
            deletingSpeed={deletingSpeed}
            pauseDuration={pauseDuration}
            isVisible={enableTypewriter && !isSearchMode}
            prefix="Search"
          />
        </motion.div>
        <motion.div className="absolute right-4 top-0 bottom-0 flex items-center justify-center">
          <SearchIcon size={20} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
