"use client";

import { useRef } from "react";

import { ParallaxScrollEffect } from "@repo/ui/components/molecules/parallax-scroll-effect";
import { CustomCursor } from "@repo/ui/components/atoms/custom-cursor";
import { Typography } from "@repo/ui/components/atoms/typography";

import { ProductHighlights } from "./_components/product-highlights";
import { DesignToolIcons } from "./_components/design-tool-icons";
import { ProductSummary } from "./_components/product-summary";
import { ProductPreview } from "./_components/product-preview";
import { ProductHeader } from "./_components/product-header";
import ProductGallery from "./_components/product-gallery";
import CommentSection from "./_components/comment-section";
import ProductFooter from "./_components/product-footer";
import { ProductTags } from "./_components/product-tags";
import InfiniteLoop from "./_components/infinite-loop";

export default function Example() {
  const targetRef = useRef<HTMLDivElement>(null!);

  return (
    <div>
      <ParallaxScrollEffect
        overlay={
          <>
            <CustomCursor targetRef={targetRef!} />
            <ProductHeader />
          </>
        }
      >
        <div className="bg-background ">
          <div className="relative w-full h-[300vh] pb-40" ref={targetRef}>
            <div className="sticky top-0 h-screen">
              <ProductGallery className="cursor-none" />
            </div>
          </div>

          <div className="container">
            {/* product detail */}
            <div className="flex justify-between pt-40 pb-44">
              <div className="">
                <Typography variant="display/md" weight="bold" className="pb-4">
                  Create Stunning Designs Using
                </Typography>
                <Typography
                  variant="heading/lg"
                  weight="light"
                  className="text-muted-foreground"
                >
                  Where Every Pixel Tells the Story of a Genius
                </Typography>
              </div>
              <div className="w-[30%]">
                <InfiniteLoop />
              </div>
            </div>

            <div className="flex gap-10 pb-40">
              <ProductSummary />
              <ProductHighlights />
            </div>

            <div className="">
              <ProductPreview />
              <ProductTags />
              <div className="flex gap-4 pb-14">
                <DesignToolIcons />
                <div className="flex gap-2 items-center">
                  <Typography variant="label/sm" weight="light">
                    15.6 MB in 1 File
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxScrollEffect>
      <ProductFooter />
    </div>
  );
}
