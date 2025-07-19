"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";

import Adobexdicon from "@repo/icons/adobexd";
import Sketchicon from "@repo/icons/sketch";
import Figmaicon from "@repo/icons/figma";

const DesignToolIcon = ({
  icon: Icon,
  size = 16,
}: {
  icon: React.ComponentType<{ size?: number }>;
  size?: number;
}) => (
  <div className="flex justify-center items-center bg-background rounded-full p-1.5">
    <Icon size={size} />
  </div>
);

const items = [
  {
    icon: Figmaicon,
    name: "Figma",
    size: 34,
  },
  {
    icon: Adobexdicon,
    name: "Adobe XD",
    size: 34,
  },
  {
    icon: Sketchicon,
    name: "Sketch",
    size: 34,
  },
];

export default function InfiniteLoop() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col relative pt-7">
      <AnimatePresence mode="wait">
        {items.map((item, index) => {
          const isMain = index === currentIndex;
          const isAbove =
            index === (currentIndex - 1 + items.length) % items.length;
          const isBelow = index === (currentIndex + 1) % items.length;
          const isAbove2 =
            index === (currentIndex - 2 + items.length) % items.length;
          const isBelow2 = index === (currentIndex + 2) % items.length;

          if (!isMain && !isAbove && !isBelow && !isAbove2 && !isBelow2)
            return null;

          return (
            <motion.div
              key={index}
              className="flex gap-2 absolute w-full items-center"
              initial={{
                y: isAbove
                  ? -60
                  : isBelow
                    ? 60
                    : isAbove2
                      ? -120
                      : isBelow2
                        ? 120
                        : 0,
                opacity: isMain ? 1 : isAbove || isBelow ? 0.45 : 0.2,
                scale: isMain ? 1.1 : 1,
              }}
              animate={{
                y: isAbove
                  ? -60
                  : isBelow
                    ? 60
                    : isAbove2
                      ? -120
                      : isBelow2
                        ? 120
                        : 0,
                opacity: isMain ? 1 : isAbove || isBelow ? 0.45 : 0.2,
                scale: isMain ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
              layout
            >
              <DesignToolIcon icon={item.icon} size={item.size} />
              <p
                className={`font-bold whitespace-nowrap ${isMain ? "text-4xl" : "text-3xl"}`}
              >
                {item.name}
              </p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
