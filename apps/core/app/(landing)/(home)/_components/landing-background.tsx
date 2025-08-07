import Image from "next/image";

import { DashedCircles } from "@repo/ui/components/atoms/dashed-circles";

import shadowBGLanding from "../../_assets/shadow-bg.svg";
import blender from "../../_assets/blender.svg";
import sketch from "../../_assets/sketch.svg";
import planet from "../../_assets/planet.svg";
import figma from "../../_assets/figma.svg";

export const LandingBackground = () => {
  return (
    <>
      {/* Background Shadow */}
      <Image
        src={shadowBGLanding}
        alt="bg-landing"
        className="top-0 left-0 absolute -z-10"
        width={1440}
        height={1024}
        priority
      />

      {/* Left Top */}
      <div className="-left-4 -top-5 hidden lg:block absolute -z-10">
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
            className="opacity-20"
            priority
          />
        </DashedCircles>
      </div>

      {/* Left Bottom */}
      <div className="left-[10vw] top-[55vh] hidden lg:block sm:opacity-100 opacity-35 absolute -z-10">
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
            className="opacity-20"
            priority
          />
        </DashedCircles>
      </div>

      {/* Right Top */}
      <div className="-right-8 top-5 hidden lg:block sm:opacity-100 opacity-35 absolute -z-30 ">
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
            className="opacity-20"
            priority
          />
        </DashedCircles>
      </div>

      {/* Right Bottom */}
      <div className="right-4 top-[65vh] hidden lg:block sm:opacity-100 absolute -z-30">
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
            className="opacity-20"
            priority
          />
        </DashedCircles>
      </div>
    </>
  );
};
