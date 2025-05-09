"use client";

import CursorIcon from "@repo/icons/cursor";
import { animate, motion, useMotionValue, SpringOptions } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMagicCursorStore } from "./magic-cursor-store";
import { typeLetterByLetter } from "./typing-utils";

// Animation constants for better DX and consistency
const ANIMATION_SETTINGS = {
  // For movement to target
  MOVEMENT: {
    type: "spring",
    stiffness: 120, // Increased for snappier movement
    damping: 18, // Slightly reduced for more bounce
    mass: 0.6, // Lighter feel
  } as SpringOptions,

  // For click animation
  CLICK_DOWN: {
    type: "spring",
    stiffness: 400,
    damping: 15,
    duration: 0.08,
    mass: 0.5,
  } as SpringOptions,

  CLICK_UP: {
    type: "spring",
    stiffness: 400,
    damping: 10,
    duration: 0.08,
    mass: 0.4,
  } as SpringOptions,

  RESET: {
    type: "spring",
    stiffness: 200,
    damping: 15,
    duration: 0.15,
  } as SpringOptions,
};

const defaultTargetCursor = "default-place-magic-cursor";

export const MagicCursor: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0); // Added for smoother transitions
  const [mounted, setMounted] = useState(false);
  const { tasks, setTasks } = useMagicCursorStore();

  //  current task
  const targetId = tasks[0]?.target;
  const taskType = tasks[0]?.type;
  const taskText = tasks[0]?.text;
  const taskDelay = tasks[0]?.delay || 500;
  const taskOffsetX = tasks[0]?.offsetX || 20;
  const taskOffsetY = tasks[0]?.offsetY || 20;

  const shapeRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const noTask = tasks.length === 0;

  // Check if an element is in the viewport
  const isInViewport = (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Scroll element into view with smooth behavior
  const scrollIntoView = (element: Element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // Debounced function to update task queue
  const completeCurrentTask = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Clear any typing interval if it exists
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      if (tasks.length > 0) {
        setTasks(tasks.slice(1));
      }
    }, taskDelay);
  };

  // Debounced version of updatePosition
  const debouncedUpdatePosition = (isScrolling = false) => {
    // Clear any existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      updatePosition(isScrolling);
    }, 50); // 50ms debounce interval
  };

  const updatePosition = (isScrolling = false) => {
    if (!targetId || !shapeRef.current) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    // Check if target is in viewport, if not, scroll to it
    if (!isInViewport(target) && !isScrolling) {
      scrollIntoView(target);
    }

    const rect = target.getBoundingClientRect();
    const shapeRect = shapeRef.current.getBoundingClientRect();

    const targetX =
      rect.left + rect.width / 2 - shapeRect.width / 2 + taskOffsetX;
    const targetY =
      rect.top + rect.height / 2 - shapeRect.height / 2 + taskOffsetY;

    // Animation options with common settings for x and y animations
    const movementOptions = {
      ...ANIMATION_SETTINGS.MOVEMENT,
      onComplete: () => {
        // After reaching target position, handle next action based on task type
        if (taskType === "click") {
          performClick({
            target,
            callback: () => {
              animate(opacity, 1, ANIMATION_SETTINGS.RESET);
              completeCurrentTask();
            },
          });
        } else if (taskType === "move") {
          // For "move" tasks, properly wait before completing
          setTimeout(() => {
            completeCurrentTask();
          }, 100); // Small delay to ensure animation is visually complete
        } else if (taskType === "fill" || taskType === "type") {
          if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement
          ) {
            performClick({
              target,
              onClickDown: () => {
                target.focus();
              },
              callback: () => {
                if (taskText) {
                  if (taskType === "fill") {
                    target.value = taskText;
                    // Dispatch input event to trigger listeners
                    target.dispatchEvent(new Event("input", { bubbles: true }));
                    setTimeout(() => {
                      completeCurrentTask();
                    }, 300); // Small delay after filling
                  } else {
                    const typingSpeed = tasks[0]?.typingSpeed || 50;
                    typingIntervalRef.current = typeLetterByLetter(
                      target,
                      taskText,
                      typingSpeed,
                      completeCurrentTask,
                    );
                  }
                } else {
                  completeCurrentTask();
                }
              },
            });
          } else {
            // If not a text input, just complete the task
            completeCurrentTask();
          }
        }
      },
    };

    const finalScale = 1;
    const finalOpacity = 1;

    // Ensure both x and y animations use the same options for consistent completion
    animate(x, targetX, movementOptions);
    animate(y, targetY, movementOptions);

    // Visual flourish during transit
    if (!isScrolling) {
      animate(scale, 1.1, ANIMATION_SETTINGS.MOVEMENT);
      animate(rotate, 15, ANIMATION_SETTINGS.MOVEMENT);

      // Full opacity when moving to target
      animate(opacity, 1, ANIMATION_SETTINGS.MOVEMENT);
    }

    // Reset scale and rotation after delay for a natural feel
    setTimeout(() => {
      animate(scale, finalScale, ANIMATION_SETTINGS.RESET);
      animate(rotate, 0, ANIMATION_SETTINGS.RESET);
      animate(opacity, finalOpacity, ANIMATION_SETTINGS.MOVEMENT);
    }, 300);
  };

  // Function to perform click animation and trigger click on target
  const performClick = ({
    target,
    callback,
    onClickDown,
    onClickUp,
  }: {
    target: HTMLElement;
    callback: () => void;
    onClickDown?: () => void;
    onClickUp?: () => void;
  }) => {
    // Slightly reduce opacity during click

    // Scale down quickly (click down animation)
    animate(scale, 0.8, {
      ...ANIMATION_SETTINGS.CLICK_DOWN,
      delay: 0.2,
      onComplete: () => {
        onClickDown?.();
        // Scale up (click up animation)
        animate(scale, 1.2, {
          ...ANIMATION_SETTINGS.CLICK_UP,
          onComplete: () => {
            onClickUp?.();
            // Trigger actual click on the element
            target.click();
            // Reset scale
            animate(scale, 1, {
              ...ANIMATION_SETTINGS.RESET,
              onComplete: () => {
                callback();
              },
            });
          },
        });
      },
    });
  };

  const moveToInitialPosition = () => {
    animate(x, 15, ANIMATION_SETTINGS.MOVEMENT);
    animate(y, window.innerHeight - 50, ANIMATION_SETTINGS.MOVEMENT);
    animate(scale, 0.8, ANIMATION_SETTINGS.MOVEMENT);
    animate(rotate, 35, ANIMATION_SETTINGS.MOVEMENT);

    animate(opacity, 0.5, ANIMATION_SETTINGS.MOVEMENT);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (noTask) {
      moveToInitialPosition();
    }

    if (!mounted) return;

    // Initial position update
    updatePosition();

    // Better event listener handling for scroll and resize with debouncing
    const handleScroll = () => debouncedUpdatePosition(true);
    const handleResize = () => debouncedUpdatePosition(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      // Clear any pending timers
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [targetId, mounted, tasks]);

  // Don't render if not mounted
  if (!mounted) return null;

  const FloatingElement = (
    <>
      <motion.div
        ref={shapeRef}
        className="fixed text-primary top-0 left-0 rounded-full pointer-events-none"
        style={{
          x,
          y,
          scale,
          rotate,
          opacity,
          zIndex: 2147483647, // Maximum z-index value
        }}
      >
        <CursorIcon />
      </motion.div>
      <div
        id={defaultTargetCursor}
        className=" fixed left-2 bottom-2  size-5"
      />
    </>
  );

  // Use portal to mount the element directly to body, ensuring it's at the top level
  return createPortal(FloatingElement, document.body);
};
