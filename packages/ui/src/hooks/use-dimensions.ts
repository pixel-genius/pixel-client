"use client";

import { useEffect, useState } from "react";

const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    clientWidth: 0,
    offsetTop: 0,
    offsetLeft: 0,
    scrollTop: 0,
    scrollLeft: 0,
    isVisible: true,
  });

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
          scrollHeight: ref.current.scrollHeight,
          scrollWidth: ref.current.scrollWidth,
          clientWidth: ref.current.clientWidth,
          offsetTop: ref.current.offsetTop,
          offsetLeft: ref.current.offsetLeft,
          scrollTop: ref.current.scrollTop,
          scrollLeft: ref.current.scrollLeft,
          isVisible:
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth,
        });
      }
    };

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(ref.current);

    // Set initial dimensions
    updateDimensions();

    // Listen to scroll events as well for scroll-related properties
    const handleScroll = updateDimensions;
    window.addEventListener("scroll", handleScroll);

    // Cleanup observer and scroll listener on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return dimensions;
};

export default useDimensions;
