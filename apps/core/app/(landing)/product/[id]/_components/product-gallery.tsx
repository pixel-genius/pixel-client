import { cn } from "@repo/ui/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
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

    // Array of 8 images - first 3 are actual images, rest are placeholders
    const images = [
      { src: "/images/product-placeholder.jpg", alt: "Placeholder image" },
      { src: "/images/p1.webp", alt: "Product image 1" },
      { src: "/images/p3.webp", alt: "Product image 3" },
      { src: "/images/product-placeholder.jpg", alt: "Placeholder image" },
      { src: "/images/p4.webp", alt: "Product image 3" },
      { src: "/images/p5.webp", alt: "Product image 3" },
      { src: "/images/p2.webp", alt: "Product image 2" },
      { src: "/images/p1.webp", alt: "Product image 3" },
      { src: "/images/product-placeholder.jpg", alt: "Placeholder image" },
     
    ];

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
          <div className="grid grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col justify-between"
              >
                <div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={464}
                    height={350}
                    className="object-cover w-full rounded-xl"
                  />
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
