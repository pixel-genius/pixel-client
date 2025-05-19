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
import {
  Button,
  ParallaxScrollEffect,
  Typography,
  Chip,
} from "@repo/ui/components";
import {
  IconCheck,
  IconChevronDown,
  IconHeart,
  IconHeartFilled,
  IconMessage,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components";

import { CustomCursor } from "@repo/ui/components";

import ProductGallery from "./_components/product-gallery";
import { useRef } from "react";
import CommentSection from "./_components/comment-section";
import ProductFooter from "./_components/product-footer";
import InfiniteLoop from "./_components/infinite-loop";

const DesignToolIcon = ({
  icon: Icon,
  size = 16,
}: {
  icon: React.ComponentType<{ size?: number }>;
  size?: number;
}) => (
  <div className="flex justify-center items-center bg-background rounded-full p-1.5">
    <Icon size={size} />
  </div>
);

const OverLay = () => {
  return (
    <div className="flex flex-col gap-4 pb-36 shrink-0 min-w-[50vw] overflow-hidden bg-background h-full justify-end px-4">
      <div className="space-y-2">
        <Typography variant="display/sm" weight="bold">
          Dyser - Finance Admin Dashboard UI Kit
        </Typography>
      </div>
      <div>
        <Typography variant="heading/sm" weight="light">
          Payment and Subscription Management Web App
        </Typography>
      </div>

      {/* Category */}
      <div className="flex items-center text-muted-foreground gap-1">
        <div className="flex items-center gap-1">
          <Instagram size={24} />
          <Typography variant="label/xs" weight="light">
            Pixeam
          </Typography>
        </div>
        <Chevronrighticon size={24} />
        <div className="flex items-center gap-1">
          <Typography variant="label/xs" weight="light">
            Figma Resources
          </Typography>
        </div>
        <div className="flex  items-center">
          <div className="border rounded-full">
            <DesignToolIcon icon={Figmaicon} />
          </div>

          <div className="-ml-2 border rounded-full">
            <DesignToolIcon icon={Adobexdicon} />
          </div>
          <div className="-ml-2 border rounded-full">
            <DesignToolIcon icon={Sketchicon} />
          </div>
        </div>
      </div>
      {/* end of category */}

      {/* buy now */}
      <div className="flex  gap-2">
        <Button
          variant="primary"
          size="md"
          iconRight={<Shopingcartplusicon size={24} />}
          className="px-10"
        >
          Buy Now
        </Button>
        {/* end of buy now */}
        {/* preview */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              iconRight={<IconChevronDown size={24} />}
              size="md"
              className="justify-between px-10 "
            >
              Preview
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Extra link</DropdownMenuItem>
            <DropdownMenuItem>Demo link</DropdownMenuItem>
            <DropdownMenuItem>Download Demo link</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* end of preview */}

        {/* like and message */}
        <div className="flex  flex-row gap-4 self-center">
          <div className="flex gap-1">
            <IconHeartFilled
              size={24}
              className="cursor-pointer text-red-500"
            />
            <Typography variant="label/lg" weight="medium">
              15
            </Typography>
          </div>
          <div className="flex gap-1">
            <IconMessage size={24} stroke={2} className="cursor-pointer" />

            <Typography variant="label/lg" weight="medium">
              +99
            </Typography>
          </div>
        </div>
        {/* end of like and message */}
      </div>
    </div>
  );
};

const HighlightItem = ({ text }: { text: string }) => (
  <div className="bg-gray-800 rounded-2xl p-4">
    <div className="flex gap-2 p-2 items-center">
      <div className=" bg-green-700 border-white border-2 rounded-full p-1">
      <IconCheck
        size={24}
        className=""
        
      />

      </div>
      
      <Typography variant="label/sm" weight="light">
      {text}
      </Typography>
    </div>
  </div>
);

const highlights = [
  "Fully Organized Layers",
  "Responsive Design",
  "Customizable Components",
  "Well Documented",
];

const FormatSection = () => (
  <>

  <div className="flex gap-4 pb-14">
  <div className="flex  items-center">
      <div className="border rounded-full">
        <DesignToolIcon icon={Figmaicon} />
      </div>

      <div className="-ml-2 border rounded-full">
        <DesignToolIcon icon={Adobexdicon} />
      </div>
      <div className="-ml-2 border rounded-full">
        <DesignToolIcon icon={Sketchicon} />
      </div>
    </div>
    <div className="flex gap-2 items-center">
      <Typography variant="label/sm" weight="light">
        15.6 MB in 1 File
      </Typography>
    </div>

  </div>
  
  </>
);

const tags = [
  "Movie",
  "Design",
  "UI",
  "Dashboard",
  "Admin",
  "Finance",
  "Web",
  "App",
];

export default function Example() {
  const targetRef = useRef<HTMLDivElement>(null!);

  return (
    <div>
      <ParallaxScrollEffect
        overlay={
          <>
            <CustomCursor targetRef={targetRef!} />
            <OverLay />
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
            <div className="flex justify-between  pt-40 pb-44 ">
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
              {/* summary of this product */}
              <div className="w-[70%]">
                <Typography variant="heading/md" weight="bold" className="pb-6">
                    Summary of this product
                </Typography>
                <Typography
                  variant="paragraph/md"
                  weight="light"
                  className="text-foreground"
                >
                  Core 2.0 is a massive leap forward, delivering a clean,
                  minimal, and trendy dashboard UI kit designed for a wide range
                  of use cases across desktop, tablet, and mobile applications.
                  With a sleek, modern design style and enhanced UI/UX, it's
                  available in both stunning light and dark modes 🔥.
                  <br />
                  <br />
                  This powerhouse package includes 490 premade templates and
                  over 500+ components, all fully responsive and built with
                  Figma autolayout for seamless customization. Whether you're
                  ideating or prototyping, Core 2.0 empowers designers to drag,
                  drop, and mix parts to create dashboards in minutes. With a
                  focus on clean design and development-ready files, the coded
                  version in React is live now as a free update!
                  <br />
                  <br />✅ Explore a variety of dashboard types, including
                  Overview, Products, Promote, Schedules, Sign In, Sign Up,
                  Statements, Income, Notifications, Message Center, Comments,
                  Account Settings, Refunds, Pricing Table, Affiliate Center,
                  and Shop. 👀 View Figma Preview
                </Typography>
              </div>
              {/* highlights you can't miss */}
              <div className="w-[30%]">
                <Typography variant="heading/md" weight="bold" className="pb-6">
                    Highlights You Can't Miss
                </Typography>
                <div className="flex flex-col gap-2">
                  {highlights.map((highlight, index) => (
                    <HighlightItem key={index} text={highlight} />
                  ))}
                </div>
              </div>
            </div>
            {/* Quick look at */}
            <div className="">
              <Typography
                variant="heading/xxl"
                weight="bold"
                className="pb-14 text-center"
              >
                Quick look at the product's key features and design elements.
              </Typography>
              <div className="w-[1350px] h-[553px] bg-gray-500 rounded-xl mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2xMbGv9uGXg?si=fgHwwHsTkxWBntwQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-wrap gap-2 items-center pb-6">
                {tags.map((tag, index) => (
                  <Chip key={index} variant="secondary" size="md">
                    #{tag}
                  </Chip>
                ))}
              </div>
              <FormatSection />
            </div>
          </div>
        </div>
      </ParallaxScrollEffect>
      <ProductFooter />
    </div>
  );
}
