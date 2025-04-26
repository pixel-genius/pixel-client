import Image from "next/image";
import { Suspense } from "react";
import { Typography } from "@repo/ui/components";
import blenderBG from "./_assets/blender-bg.svg";
import figmaBG from "./_assets/figma-bg.svg";
import planetBG from "./_assets/planet-bg.svg";
import shadowBGLanding from "./_assets/shadow-bg.svg";
import sketchBG from "./_assets/sketch-bg.svg";
import { LandingTabs } from "./_components/landing-tabs";

export default function Page() {
  return (
    <main className="container">
      {/* Background Shadow */}
      <Image
        src={shadowBGLanding}
        alt="bg-landing"
        className="top-0 left-0 absolute -z-10"
        width={1440}
        height={1024}
        priority
      />

      {/* Planet Background */}
      <Image
        src={planetBG}
        alt="bg-landing"
        className="left-0 hidden sm:block absolute -z-10"
        width={250}
        height={250}
      />

      {/* Figma Background */}
      <Image
        src={figmaBG}
        alt="bg-landing"
        className="left-10 top-72 sm:opacity-100 opacity-35 absolute -z-10"
        width={250}
        height={250}
      />

      {/* Sketch Background */}
      <Image
        src={sketchBG}
        alt="bg-landing"
        className="right-10 top-12 sm:opacity-100 opacity-35 absolute -z-10"
        width={250}
        height={250}
      />

      {/* Blender Background */}
      <Image
        src={blenderBG}
        alt="bg-landing"
        className="right-24 top-80 sm:opacity-100 opacity-35 absolute -z-10"
        width={250}
        height={250}
      />

      {/* Header */}
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
            className="italic text-primary-500"
          >
            pixel geniuses
          </Typography>{" "}
          to supercharge your creativity.
        </Typography>
      </div>

      {/* Product Tabs */}
      <Suspense>
        <LandingTabs />
      </Suspense>
    </main>
  );
}
