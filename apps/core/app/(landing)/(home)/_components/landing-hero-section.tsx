"use client";
import {
  ProductList3D,
  ProductListUiUx,
} from "../../_constant/mock-product-list";
import { ProductCard } from "@repo/ui/components/molecules/product-card";
import { Typography } from "@repo/ui/components/atoms/typography";
import { SearchBox } from "../../_components/search-box";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SCROLL_TOP_RANGE = 0.75;

export const LandingHeroSection = () => {
  const { scrollYProgress } = useScroll();

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 80,
    restDelta: 0.001,
  });

  const transform = useTransform(
    scrollSpring,
    [0, SCROLL_TOP_RANGE],
    ["translate(0px, -500px)", "translate(0px, -100px)"],
  );

  const transform2 = useTransform(
    scrollSpring,
    [0, SCROLL_TOP_RANGE],
    ["translate(0px, -100px)", "translate(0px, -500px)"],
  );

  return (
    <main>
      <article className="flex gap-4 items-center">
        {/* Left Section */}
        <section className="flex grow-[2] flex-col gap-4 pt-32 mb-10 md:mb-0 ">
          <div>
            <Typography
              variant="display/sm"
              weight="bold"
              component="h1"
              className="text-primary"
            >
              PixelGenius
            </Typography>
            <Typography variant="display/sm" weight="normal" className="h2">
              Marketplace for Digital Creators
            </Typography>
          </div>
          <Typography
            weight="normal"
            className="text-muted-foreground"
            component="p"
            variant="label/sm"
          >
            A curated space to discover high-quality digital assets Buy
            ready-to-use UI kits, templates and 3D resources Or share and sell
            your own work with a creative global audience
          </Typography>

          <SearchBox className="w-full" enableTypewriter />
        </section>
        {/* Right Section */}
        <div className="w-full  grow-[1] items-center justify-center -z-20 relative hidden lg:flex">
          <div
            className="overflow-hidden relative max-h-[600px] "
            suppressHydrationWarning
            style={{
              transform:
                "perspective(1500px) rotateX(20deg) rotateY(333deg) rotateZ(10deg)",
            }}
          >
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-0% from-background to-50% to-background/25" />
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-0% from-background to-50% to-background/25" />

            <div className="flex gap-4">
              <motion.div
                className="flex flex-col w-72 gap-4  flex-shrink-0 flex-grow-0 "
                style={{
                  transform,
                }}
              >
                {ProductListUiUx.reverse().map((product) => (
                  <ProductCard
                    key={product.title}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    avatar={product.avatar}
                    username={product.username}
                    like={product.like}
                  />
                ))}
              </motion.div>

              <motion.div
                className=" flex-col w-72 gap-4   flex-shrink-0 flex-grow-0  hidden xl:flex"
                style={{
                  transform: transform2,
                }}
              >
                {ProductList3D.map((product) => (
                  <ProductCard
                    key={product.title}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    avatar={product.avatar}
                    username={product.username}
                    like={product.like}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
