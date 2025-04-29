import Image from "next/image";
import { Suspense } from "react";
import { DashedCircles, Typography } from "@repo/ui/components";
import blender from "./_assets/blender.svg";
import planet from "./_assets/planet.svg";
import figma from "./_assets/figma.svg";
import shadowBGLanding from "./_assets/shadow-bg.svg";
import sketch from "./_assets/sketch.svg";
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

      <div className="-left-4 -top-5 hidden sm:block absolute -z-10">
        <DashedCircles
          count={4}
          baseSize={250}
          gapSize={40}
          duration={50}
          speedFactor={0.8}
          borderColor="#6155FF"
          borderWidth={3}
          dashArray="16,19,24"
          dashOffset={30}
          dashArrayFactor={0.85}
          borderOpacity={0.2}
          rotationDirection="alternating"
          className="size-[250px]"
        >
          <Image
            src={planet}
            alt="bg-landing "
            width={80}
            height={80}
            className="opacity-70"
            priority
          />
        </DashedCircles>
      </div>

      <div className="left-10 top-72 sm:opacity-100 opacity-35 absolute -z-10">
        <DashedCircles
          count={4}
          baseSize={250}
          gapSize={40}
          duration={120}
          speedFactor={0.7}
          borderColor="#6155FF"
          borderWidth={3}
          dashArray="16,19,24"
          dashOffset={30}
          dashArrayFactor={0.85}
          borderOpacity={0.15}
          rotationDirection="clockwise"
          className="size-[250px]"
        >
          <Image
            src={figma}
            alt="bg-landing "
            width={100}
            height={100}
            className="opacity-70"
            priority
          />
        </DashedCircles>
      </div>

      <div className="right-10 top-5 sm:opacity-100 opacity-35 absolute -z-10 ">
        <DashedCircles
          count={4}
          baseSize={250}
          gapSize={40}
          duration={180}
          speedFactor={0.7}
          borderColor="#6155FF"
          borderWidth={3}
          dashArray="16,19,24"
          dashOffset={30}
          dashArrayFactor={0.85}
          borderOpacity={0.2}
          rotationDirection="counterclockwise"
          className="size-[250px]"
        >
          <Image
            src={sketch}
            alt="bg-landing"
            width={100}
            height={100}
            className="opacity-70"
            priority
          />
        </DashedCircles>
      </div>

      <div className="right-36 top-80 sm:opacity-100 absolute">
        <DashedCircles
          count={4}
          baseSize={250}
          gapSize={40}
          duration={50}
          speedFactor={0.7}
          borderColor="#6155FF"
          borderWidth={3}
          dashArray="16,19,24"
          dashOffset={30}
          dashArrayFactor={0.85}
          borderOpacity={0.2}
          rotationDirection="alternating"
          className="size-[250px]"
        >
          <Image
            src={blender}
            alt="bg-landing"
            width={100}
            height={100}
            className="opacity-70"
            priority
          />
        </DashedCircles>
      </div>

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
