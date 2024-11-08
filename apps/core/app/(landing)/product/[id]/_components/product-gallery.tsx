import { cn } from "@repo/ui/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { forwardRef } from "react";

const ProductGallery = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const { scrollYProgress } = useScroll();

    const scrollSpringRotate = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 130,
      restDelta: 0.0006,
    });

    const transform = useTransform(
      scrollSpringRotate,
      [0, 0.3],
      [
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(38deg) rotateY(0deg) rotateZ(20deg) skew(-24deg, 0deg)",
        "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(30deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      ],
    );

    return (
      <div ref={ref} className={cn("w-full overflow-hidden", className)}>
        <motion.div
          className="container"
          style={{
            transform: transform,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* NEW  */}
          <div className="flex gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col gap-4 justify-between mb-36 w-full grow"
              >
                <div>
                  <img src="/images/product-placeholder.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/product-placeholder.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/product-placeholder.jpg" alt="" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  },
);

export default ProductGallery;
