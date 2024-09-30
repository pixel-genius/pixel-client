import CursorIcon from "@repo/icons/cursor";

import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CustomCursorProps {
  color?: string;
  size?: number;
  targetRef: React.RefObject<HTMLElement>;
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
            color: color,
          }}
        >
          <CursorIcon size={size} color={color} />
          <div
            className="absolute left-7 text-xs text-foreground whitespace-nowrap font-bold p-1.5 px-2 rounded"
            style={{ backgroundColor: color }}
          >
            {label}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
