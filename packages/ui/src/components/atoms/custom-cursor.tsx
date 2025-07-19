"use client";

import { motion, useMotionValue } from "framer-motion";

import React, { useEffect, useState } from "react";

import CursorIcon from "@repo/icons/cursor";

interface CustomCursorProps {
  color?: string;
  size?: number;
  targetRef: React.RefObject<HTMLDivElement | null>;
  label?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  color = "var(--primary-700)",
  size = 20,
  targetRef,
  label = "Guest User",
}) => {
  const cursorX = useMotionValue(-100); // Initially off-screen
  const cursorY = useMotionValue(-100); // Initially off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - size / 2);
      cursorY.set(event.clientY - size / 2);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const target = targetRef.current;

    if (target) {
      target.addEventListener("mousemove", handleMouseMove);
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (target) {
        target.removeEventListener("mousemove", handleMouseMove);
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [cursorX, cursorY, size, targetRef]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed z-50 top-0 left-0 pointer-events-none cursor-none"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        >
          <div className="relative flex items-center">
            {/* SVG Arrow Cursor */}
            <svg
              width={size * 1.5}
              height={size * 1.5}
              viewBox="0 0 30 30"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <polygon
                points="2,2 28,15 15,18 12,28"
                fill="#6751D6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            {/* Label */}
            <div className="ml-3 mt-12 text-sm font-light text-white bg-primary whitespace-nowrap p-1.5 px-4 rounded">
              {label}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export { CustomCursor };
