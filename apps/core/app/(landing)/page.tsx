"use client";
import Typography from "@repo/ui/components/typography";
import * as htmlToImage from "html-to-image";
import { useTheme } from "next-themes";
import { useState } from "react";

import {
  TabProvider,
  TabList,
  TabTrigger,
  TabContent,
} from "@repo/ui/components/tabs";

import { ProductCard } from "@repo/ui/components/prodoct-card";
import {
  ProductList,
  ProductListUiUx,
  ProductList3D,
  ProductListGraphic,
} from "./_constant/mock-product-list";

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
      <img
        src="/images/bg-landing.svg"
        alt="bg-landing"
        className="top-0 left-0 absolute -z-10"
      />

      <img
        src="/images/landing-simbol.svg"
        alt="bg-landing"
        className="right-0 hidden sm:block absolute -z-10"
      />
      <img
        src="/images/landing-simbol2.svg"
        alt="bg-landing"
        className="left-0 sm:opacity-100 opacity-35  absolute -z-10"
      />

      {/* Heder */}
      <div className="pb-56 pt-48">
        <Typography
          component="h1"
          variant="display/sm"
          weight="medium"
          className="text-center"
        >
          Find{" "}
          <Typography component="span" variant="inherit" weight="bold">
            {" "}
            thousands
          </Typography>{" "}
          of meticulously crafted resources by{" "}
          <Typography
            component="span"
            variant="inherit"
            weight="light"
            className=" italic text-primary-500"
          >
            pixel geniuses
          </Typography>{" "}
          to supercharge your creativity.
        </Typography>
      </div>
      {/* Cards */}
      <div className="mb-44">
        {/* Tabs */}
        <TabProvider defaultValue="trend">
          <TabList>
            <TabTrigger value="trend">Trends</TabTrigger>
            <TabTrigger value="uiux">UIUX</TabTrigger>
            <TabTrigger value="3d">3D Model</TabTrigger>
            <TabTrigger value="graphic">Graphic Design</TabTrigger>
          </TabList>
          <TabContent value="trend">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
              {ProductList.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  username={product.username}
                  see={product.see}
                  avatar={product.avatar}
                  like={product.like}
                />
              ))}
            </div>
          </TabContent>
          <TabContent value="uiux">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
              {ProductListUiUx.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  avatar={product.avatar}
                  username={product.username}
                  see={product.see}
                  like={product.like}
                />
              ))}
            </div>
          </TabContent>
          <TabContent value="3d">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
              {ProductList3D.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  avatar={product.avatar}
                  username={product.username}
                  see={product.see}
                  like={product.like}
                />
              ))}
            </div>
          </TabContent>
          <TabContent value="graphic">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
              {ProductListGraphic.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  avatar={product.avatar}
                  username={product.username}
                  see={product.see}
                  like={product.like}
                />
              ))}
            </div>
          </TabContent>
        </TabProvider>
      </div>
    </main>
  );
}
