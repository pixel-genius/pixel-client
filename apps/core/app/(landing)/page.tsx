"use client";

import { ProductCard } from "@repo/ui/components/prodoct-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import Typography from "@repo/ui/components/typography";
import * as htmlToImage from "html-to-image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BrowseMegaMenu } from "./_components/browseMegaMenu/browse-mega-menu";

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
      <div className="pb-80 pt-48">
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
      <div className="">
        {/* Tabs */}
        <div className="pb-32">
          <Tabs defaultValue="account">
            <div className="pb-4">
              <TabsList className="">
                <TabsTrigger value="General">General</TabsTrigger>
                <TabsTrigger value="Images">Images</TabsTrigger>
                <TabsTrigger value="file">file</TabsTrigger>
                <TabsTrigger value="Admin Chat">Admin Chat</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="General">
              <div className="grid lg:grid-cols-4 sm:lg:grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
                <div>
                  <ProductCard
                    image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
                    title="title"
                    price="10 $"
                    username="username"
                    see={10}
                    like={10}
                  />
                </div>
                <div>
                  {" "}
                  <ProductCard
                    image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
                    title="title"
                    price="10 $"
                    username="username"
                    see={10}
                    like={10}
                  />
                </div>
                <div>
                  {" "}
                  <ProductCard
                    image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
                    title="title"
                    price="10 $"
                    username="username"
                    see={10}
                    like={10}
                  />
                </div>
                <div>
                  {" "}
                  <ProductCard
                    image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
                    title="title"
                    price="10 $"
                    username="username"
                    see={10}
                    like={10}
                  />
                </div>
                <div>
                  {" "}
                  <ProductCard
                    image="https://i.pinimg.com/originals/4c/f0/b4/4cf0b43f5b8402fb0aba8ff1d259de5b.png"
                    title="title"
                    price="10 $"
                    username="username"
                    see={10}
                    like={10}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
