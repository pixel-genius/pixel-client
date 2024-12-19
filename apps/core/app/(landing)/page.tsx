"use client";

import Circlxicon from "@repo/icons/circle-x";
import { Button } from "@repo/ui/components/button";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import * as htmlToImage from "html-to-image";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const captureScreenshot = async () => {
    const dataUrl = await htmlToImage.toPng(document.body, {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    });
    setImageUrl(dataUrl);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="container ">
      {/* <div>
      {imageUrl && (
        <motion.div
          key={theme}
          style={{ overflow: "hidden" }}
          className="w-screen h-screen fixed inset-0 z-50"
          initial={{ clipPath: "circle(150% at 0% 0%)" }}
          animate={{ clipPath: "circle(0% at 0% 0%)" }}
          transition={{ duration: 2.75, ease: "easeInOut" }}
        >
          <motion.img
            className="w-screen fixed inset-0 z-50 top-[unset] bottom-[unset]"
            key={imageUrl}
            src={imageUrl}
            alt="Captured Screenshot"
            style={{ maxWidth: "100%" }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#cacaca"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#cacaca"}
        >
          Card
        </MagicCard>
      </div>
      <div className=" py-24 sm:py-32 flex justify-center">
        <Button onClick={captureScreenshot}>Change Theme</Button>
      </div>
      </div> */}
      {/* Heder */}
      <div className="pb-80">
        <h1 className="sm:text-5xl text-3xl text-center">
          Find 2 <samp className="font-bold"> thousands</samp> of meticulously
          crafted resources by{" "}
          <samp className="font-extralight text-primary-500">
            pixel geniuses
          </samp>{" "}
          to supercharge your creativity.
        </h1>
      </div>
      {/* Cards */}
      <div className="">
        {/* btn or div */}
        <div className="pb-4 flex gap-2 items-center justify-center">
          <Button variant="secondary" size="sm">
            {" "}
            illustrator <Circlxicon className="ml-1" size={16} />
          </Button>
          <Button variant="secondary" size="sm">
            {" "}
            illustrator <Circlxicon className="ml-1" size={16} />
          </Button>
          <Button variant="secondary" size="sm">
            {" "}
            illustrator <Circlxicon className="ml-1" size={16} />
          </Button>
          <Button variant="secondary" size="sm">
            {" "}
            illustrator <Circlxicon className="ml-1" size={16} />
          </Button>
        </div>
        {/* card */}
        <div className="pb-60">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <ProductCard
              image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
            <ProductCard
              image="https://i.pinimg.com/originals/25/55/b7/2555b75333af986162a9f229f3fb736b.png"
              title="title"
              price="10 $"
              username="username"
              see={10}
              like={10}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
