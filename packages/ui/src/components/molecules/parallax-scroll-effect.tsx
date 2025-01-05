"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

export interface ParallaxScrollEffectProps {
  children: ReactNode;
  overlay: ReactNode;
}

export const SCROLL_TOP_RANGE = 0.3;

export const ParallaxScrollEffect = ({
  children,
  overlay,
}: ParallaxScrollEffectProps) => {
  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [fakeDivHeight, setFakeDivHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0006,
  });

  const width = useTransform(
    scrollSpring,
    [0, SCROLL_TOP_RANGE],
    ["50%", "0%"],
  );

  useLayoutEffect(() => {
    if (contentRef.current) {
      setFakeDivHeight(contentRef.current.clientHeight);
    }
  }, [contentRef.current]);

  useEffect(() => {
    const updateScroll = (value: number) => {
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrolledPixels =
        scrollYProgress.get() * (scrollHeight - viewportHeight);

      if (value < SCROLL_TOP_RANGE + 0.1) {
        mouseX.set(scrolledPixels);
        mouseY.set(scrolledPixels + fakeDivHeight);
      }
    };

    const unsubscribe = scrollYProgress.on("change", (value) => {
      updateScroll(value);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, fakeDivHeight]);

  return (
    <div>
      {/* Overlay */}
      <motion.div
        className="overflow-hidden grow  shrink-1  top-0 h-screen fixed left-0 z-50"
        style={{ width: width, maxWidth: "100%" }}
      >
        {overlay}
      </motion.div>

      {/* Main Content */}

      <div>{children}</div>

      {/* FALKSE DIV */}
      {/* <motion.div
        className=" w-full"
        style={{
          minHeight: fakeDivHeight,
          height: useMotionTemplate`${mouseY}px`,
        }}
      ></motion.div> */}
    </div>
  );
};

export default ParallaxScrollEffect;
