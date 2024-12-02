"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function App() {
  const { rive, RiveComponent } = useRive({
    src: "/clean_the_car.riv",
    stateMachines: "Motion",
    autoplay: true,
  });

  // const inputRive = useStateMachineInput(rive, "State Machine 1", "Scroll");

  // // Motion value to track scroll progress
  // const scrollY = useMotionValue(0);
  // const smoothScrollY = useSpring(scrollY, {
  //   stiffness: 50,
  //   damping: 20,
  // });

  // // Handle scroll event
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const scrollHeight = document.body.scrollHeight - window.innerHeight;
  //     const scrollPercentage = (scrollTop / scrollHeight) * 100;

  //     scrollY.set(scrollPercentage); // Set raw scroll percentage
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [scrollY]);

  // // Sync spring value with Rive state machine input
  // useEffect(() => {
  //   const unsubscribe = smoothScrollY.onChange((value) => {
  //     if (inputRive) {
  //       inputRive.value = value; // Update Rive input based on smooth scroll
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [smoothScrollY, inputRive]);

  return (
    <div style={{ height: "200vh" }}>
      <div className="inset-0 fixed">
        <RiveComponent />
      </div>
    </div>
  );
}
