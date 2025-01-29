"use client";

import Adobexdicon from "@repo/icons/adobexd";
import Chevronrighticon from "@repo/icons/chevron-right";
import Circlecheckicon from "@repo/icons/Circle-check";
import Clouddownloadicon from "@repo/icons/cloud-download";
import Figmaicon from "@repo/icons/figma";
import Heart1icon from "@repo/icons/heart";
import Instagram from "@repo/icons/instagram";
import Messagecircleicon from "@repo/icons/message-circle";
import Shopingcartplusicon from "@repo/icons/shopping-cart-plus";
import Sketchicon from "@repo/icons/sketch";
import { ParallaxScrollEffect } from "@repo/ui/components/parallax-scroll-effect"; 
import { Button } from "@repo/ui/components/button";
import CustomCursor from "@repo/ui/components/custom-cursor";

import ProductGallery from "./_components/product-gallery";
import { useRef } from "react";
import CommentSection from "./_components/comment-section";
import ProductFooter from "./_components/product-footer";

const OverLay = () => {
  return (
    <div className="flex flex-col gap-4 pb-36  shrink-0 min-w-[50vw] overflow-hidden  bg-background h-full justify-end px-4">
      <div className="">
        <p className="text-5xl font-medium">Dyser - Finance Admin</p>
        <p className="text-5xl font-medium">Dashboard UI Kit</p>
      </div>
      <div>
        <p className="text-2xl font-normal">
          Payment and Subscription Management Web App
        </p>
      </div>
      <div className="flex gap-2">
        <Instagram size={32} />
        <p>Pixeam</p>
        <Chevronrighticon size={24} />
        <p>Figma Resources</p>
        <div className="flex ">
          <div className="flex justify-center items-center bg-background rounded-full p-1.5">
            <Figmaicon size={16} />
          </div>

          <div className="flex  -ml-2 justify-center items-center bg-background rounded-full p-1.5">
            <Adobexdicon size={16} />
          </div>

          <div className="flex -ml-3 justify-center items-center bg-background rounded-full p-1.5">
            <Sketchicon size={16} />
          </div>
        </div>
      </div>

      <div className="flex  gap-2">
        <Button
          // variant="default"
          className="bg-primary-600 hover:bg-primary-500 text-foreground h-auto py-4 w-36"
        >
          Buy Now <Shopingcartplusicon size={24} className="ml-2" />
        </Button>

        <Button 
        // variant="default" 
        className="w-36 h-auto !py-4">
          Preview{" "}
        </Button>

        <div className="flex  flex-col">
          <div className="flex gap-1">
            <Heart1icon size={28} className="cursor-pointer" />
            <p>15</p>
          </div>
          <div className="flex gap-1">
            <Messagecircleicon size={28} className="cursor-pointer" />
            <p>+99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Example() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ParallaxScrollEffect
        overlay={
          <>
            <CustomCursor targetRef={targetRef} />
            <OverLay />
          </>
        }
      >
        <div className="bg-background ">
          <div className="relative w-full h-[300vh]" ref={targetRef}>
            <div className="sticky top-0 h-screen">
              <ProductGallery  className="cursor-none" />
            </div>
          </div>

          {/* <ProductGallery ref={targetRef} className="cursor-none" /> */}
          <div className="container">
            {/* product detail */}
            <div className="flex justify-around gap-3 pb-9 ">
              <div>
                <p className="text-6xl font-bold pb-3">
                  Create Stunning Designs Using
                </p>
                <p className="text-4xl font-normal">
                  Where Every Pixel Tells the Story of a Genius
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 opacity-45">
                  <Figmaicon size={34} width={34} height={34} />
                  <p className="text-2xl font-bold">Figma</p>
                </div>
                <div className="flex gap-2">
                  <Adobexdicon size={34} width={34} height={34} />
                  <p className="text-3xl font-bold">Adobe XD</p>
                </div>
                <div className="flex gap-2 opacity-45">
                  <Sketchicon size={34} width={34} height={34} />
                  <p className="text-2xl font-bold">Sketch</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 pb-40">
              {/* summary of this product */}
              <div className="w-[70%]">
                <h2 className="text-4xl font-bold pb-6">
                  Summary of this product
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita debitis quam nostrum nam earum tempore, eos repellat
                  quis numquam, ea accusamus praesentium quo sapiente cum, ipsum
                  fugit itaque non illo sit. Praesentium dicta ut mollitia vel
                  laboriosam quia! Officia, rem quisquam ut ipsa temporibus
                  aliquam magni dolorum asperiores vitae corrupti in,
                  voluptatibus commodi! Eaque quaerat tempora similique
                  inventore consectetur alias numquam mollitia aperiam
                  reprehenderit! Aut incidunt dignissimos nostrum facere
                  doloribus nihil dicta magnam vero. Necessitatibus ratione hic
                  similique unde delectus adipisci expedita quam, nobis esse
                  excepturi, rerum nemo totam dignissimos ab fuga, a voluptas
                  voluptatum eveniet odit voluptate? Atque, a.
                </p>
              </div>
              {/* highlights you can't miss */}
              <div className="w-[30%]">
                <h2 className="text-3xl font-bold pb-6">
                  Highlights You Can’t Miss
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="flex gap-2 p-2 items-center">
                      <Circlecheckicon
                        size={24}
                        className="opacity-15 text-success-400 bg-white rounded-full"
                      />
                      <p className="text-sm font-semibold">
                        Fully Oraganised Layers
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="flex gap-2 p-2 items-center">
                      <Circlecheckicon
                        size={24}
                        className="opacity-15 text-success-400 bg-white rounded-full"
                      />
                      <p className="text-sm font-semibold">
                        Fully Oraganised Layers
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="flex gap-2 p-2 items-center">
                      <Circlecheckicon
                        size={24}
                        className="opacity-15 text-success-400 bg-white rounded-full"
                      />
                      <p className="text-sm font-semibold">
                        Fully Oraganised Layers
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-4">
                    <div className="flex gap-2 p-2 items-center">
                      <Circlecheckicon
                        size={24}
                        className="opacity-15 text-success-400 bg-white rounded-full"
                      />
                      <p className="text-sm font-semibold">
                        Fully Oraganised Layers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quick look at */}
            <div className="">
              <p className="text-center text-4xl font-bold pb-7">
                Quick look at the product's key features and design elements.
              </p>
              <div className="w-[1350xp] h-[553px] bg-gray-500 rounded-xl mb-6"></div>
              <div className="flex gap-2 items-center pb-6">
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
                <p>#Moive</p>
              </div>
              <div className=" flex gap-3">
                <div className="flex gap-7 pb-14">
                  <div className="flex gap-2">
                    <p className="text-sm font-bold">Format :</p>
                    <div className="flex justify-center items-center bg-background rounded-full p-1.5">
                      <Figmaicon size={16} />
                    </div>
                    <div className="flex  -ml-2 justify-center items-center bg-background rounded-full p-1.5">
                      <Adobexdicon size={16} />
                    </div>
                    <div className="flex -ml-3 justify-center items-center bg-background rounded-full p-1.5">
                      <Sketchicon size={16} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Clouddownloadicon size={16} />
                    <p>15.6 MB in1 File</p>
                  </div>
                </div>
              </div>
            </div>
            <CommentSection />
          </div>
        </div>
      </ParallaxScrollEffect>
      <ProductFooter />
    </div>
  );
}
