"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@repo/ui/lib/utils";

export interface DashedCirclesProps {
  children: ReactNode;
  className?: string;
  /**
   * Number of circles to display
   * @default 3
   */
  count?: number;
  /**
   * Base size of the largest circle in pixels
   * @default 300
   */
  baseSize?: number;
  /**
   * Gap between each circle in pixels
   * @default 30
   */
  gapSize?: number;
  /**
   * Base duration of animation in seconds (for outermost circle)
   * @default 20
   */
  duration?: number;
  /**
   * Factor to reduce animation speed for each inner circle
   * @default 0.8
   */
  speedFactor?: number;
  /**
   * Border color for the circles
   * @default "#6366F1" (primary-500)
   */
  borderColor?: string;
  /**
   * Border width in pixels
   * @default 2
   */
  borderWidth?: number;
  /**
   * Base dash array pattern (comma-separated values)
   * @default "16,19,24"
   */
  dashArray?: string;
  /**
   * Base dash offset
   * @default 0
   */
  dashOffset?: number;
  /**
   * Factor to adjust dash array for each inner circle
   * @default 0.85
   */
  dashArrayFactor?: number;
  /**
   * Direction of rotation for each circle
   * @default alternating
   */
  rotationDirection?: "clockwise" | "counterclockwise" | "alternating";
  /**
   * Border color opacity
   * @default 0.30
   */
  borderOpacity?: number;
}

export const DashedCircles = ({
  children,
  className,
  count = 3,
  baseSize = 300,
  gapSize = 30,
  duration = 20,
  speedFactor = 0.8,
  borderColor = "#6366F1", // primary-500
  borderWidth = 2,
  dashArray = "16,19,24",
  dashOffset = 0,
  dashArrayFactor = 0.85,
  rotationDirection = "alternating",
  borderOpacity = 0.3,
}: DashedCirclesProps) => {
  // Convert hex color to URL-safe format for SVG
  const getUrlSafeColor = (color: string, opacity: number = borderOpacity) => {
    // If it's a Tailwind class, extract primary color
    if (typeof color === "string" && color.startsWith("border-")) {
      // Default to primary color if using Tailwind class
      return `%236366F1${Math.round(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
    }

    // For hex colors, add opacity
    if (
      typeof color === "string" &&
      color.startsWith("#") &&
      color.length === 7
    ) {
      return encodeURIComponent(
        `${color}${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`,
      );
    }

    // Encode the color for SVG use
    return encodeURIComponent(color);
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center -z-10",
        className,
      )}
    >
      {Array.from({ length: count }).map((_, index) => {
        const size = baseSize - index * gapSize;
        const delay = index * 0.2;

        // Calculate rotation speed (gets faster for inner circles if speedFactor < 1)
        const circleDuration = duration * Math.pow(speedFactor, index);

        // Calculate rotation direction
        let rotate = [0, 360]; // clockwise by default
        if (rotationDirection === "counterclockwise") {
          rotate = [0, -360];
        } else if (rotationDirection === "alternating") {
          rotate = index % 2 === 0 ? [0, 360] : [0, -360];
        }

        // Adjust dash array for each inner circle
        const dashArrayParts = dashArray
          .split(",")
          .map((part) =>
            Math.max(
              4,
              parseInt(part.trim()) * Math.pow(dashArrayFactor, index),
            ),
          );
        const adjustedDashArray = dashArrayParts.join(",");

        // Adjust dash offset for each circle
        const adjustedDashOffset = dashOffset + index * 15;

        // Adjust border width based on circle size
        const adjustedBorderWidth = Math.max(
          1,
          borderWidth * (1 - index * 0.1),
        );

        // Create SVG URL for background with specific opacity
        const svgUrl = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${size / 2}' ry='${size / 2}' stroke='${getUrlSafeColor(borderColor)}' stroke-width='${adjustedBorderWidth}' stroke-dasharray='${adjustedDashArray}' stroke-dashoffset='${adjustedDashOffset}' stroke-linecap='butt'/%3e%3c/svg%3e")`;

        // Calculate circle opacity based on index
        const circleOpacity = Math.max(0.3, 1 - index * 0.2);

        return (
          <motion.div
            key={index}
            className={cn(
              "absolute rounded-full flex items-center justify-center",
            )}
            style={{
              width: size,
              height: size,
              backgroundImage: svgUrl,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              border: "none",
            }}
            initial={{ opacity: circleOpacity * 0.7, scale: 0.95 }}
            animate={{
              opacity: [
                circleOpacity * 0.7,
                circleOpacity,
                circleOpacity * 0.7,
              ],
              scale: [0.95, 1, 0.95],
              rotate,
            }}
            transition={{
              duration: circleDuration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
