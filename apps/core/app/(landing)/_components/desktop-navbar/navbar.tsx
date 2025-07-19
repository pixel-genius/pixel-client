"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import PixelIcon from "@repo/icons/pxiel";
import SearchIcon from "@repo/icons/serach";
import XIcon from "@repo/icons/x";
import { BaseInput } from "@repo/ui/components/atoms/base-input";
import { Chip } from "@repo/ui/components/atoms/chip";
import { cn } from "@repo/ui/lib/utils";

import earth from "../../_assets/earth.svg";
import { useMegaMenuStore } from "../../store/mega-menu";
import { BrowseMegaMenu } from "../browseMegaMenu/browse-mega-menu";
import ShoppingBagDropdown from "../shopping-bag-dropdown";
import FeaturesNavbar from "./features-navbar";
import NavbarLinks from "./navbar-links";

const Navbar = ({ islogin }: { islogin: boolean }) => {
  const { isOpenMegaMenu } = useMegaMenuStore();

  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleOpenSearch = () => {
    setIsSearchActive(true);
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
  };

  return (
    <>
      <motion.div
        layoutId="bg-navbar"
        id="navbar"
        className={cn(
          "bg-background shadow-box rounded-xl fixed top-12 -left-1/2 -right-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[962px] max-w-none mx-auto hidden md:block",
          isSearchActive && "rounded-none",
        )}
        initial={{
          scale: 1,
          opacity: 1,
          y: 0,
          width: "926px",
          height: "72px",
          top: "48px",
        }}
        animate={
          !isSearchActive
            ? {
                scale: 1,
                opacity: 1,
                y: 0,
                width: "926px",
                height: "72px",
                top: "48px",
                borderRadius: "12px",
                backgroundColor: "hsl(var(--background))",
                backdropFilter: "blur(0px)",
              }
            : {
                scale: 1,
                opacity: 1,
                y: 0,
                width: "100vw",
                height: "100vh",
                inset: "0",
                top: "0",
                left: "0",
                right: "0",
                borderRadius: "0px",
                backgroundColor: "hsla(var(--background) / 0.95)",
                backdropFilter: "blur(20px)",
              }
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          {!isSearchActive && (
            <div className="flex py-3 px-5 items-center h-full w-full justify-between">
              <div className="flex items-center w-full">
                <div className="flex items-center">
                  <div className="flex items-center w-full overflow-hidden whitespace-nowrap">
                    <div className="pr-5">
                      <Link href="/" aria-label="Pixel Genius">
                        <PixelIcon size={45} />
                      </Link>
                    </div>
                    <div className="pr-4">
                      <NavbarLinks />
                    </div>
                  </div>

                  {/* Search Icon */}
                  <motion.div className="cursor-pointer" layoutId="search-icon">
                    <SearchIcon size={20} onClick={() => handleOpenSearch()} />
                  </motion.div>
                </div>
              </div>

              {/* login and sign up and cart */}
              {!isSearchActive && (
                <div className="flex items-center">
                  <FeaturesNavbar islogin={islogin} />
                </div>
              )}
            </div>
          )}

          {isOpenMegaMenu && (
            <div className="overflow-hidden rounded-b-xl h-[290px]">
              <BrowseMegaMenu />
            </div>
          )}

          {isSearchActive && (
            <div className="relative size-full overflow-hidden">
              <div className="absolute top-5 right-5 cursor-pointer">
                {/* Close Search Icon */}
                <XIcon size={20} onClick={() => handleCloseSearch()} />
              </div>

              {/* Main Search Bar */}
              <div className="size-full flex items-center justify-center  max-w-screen-md md:max-w-screen-sm px-4 py-8 mx-auto">
                <div className="w-full flex flex-col gap-4">
                  <div className="relative">
                    <motion.div
                      layoutId="search-bar"
                      className="w-full"
                      // initial={{ opacity: 0.25 }}
                      // animate={{ opacity: 1 }}
                      // exit={{ opacity: 0.25 }}
                      // transition={{
                      //   duration: 0.35,
                      //   delay: 0.5,
                      //   ease: "easeInOut",
                      // }}
                    >
                      <BaseInput
                        placeholder="Type anything to search..."
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div
                      layoutId="search-icon"
                      transition={{
                        layout: {
                          duration: 1,
                          delay: 0.25,
                          ease: [0.42, 0.0, 0.58, 1.0], // custom cubic-bezier
                        },
                      }}
                      className="absolute right-4 top-0 bottom-0 flex items-center justify-center"
                    >
                      <SearchIcon size={20} />
                    </motion.div>
                  </div>

                  <motion.div className="flex gap-2">
                    {["Mobile", "Web", "Travel", "Food", "Dashboard"].map(
                      (chipText, index) => (
                        <motion.div
                          key={chipText}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                            x: index * -50,
                            zIndex: index * -10,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.8,
                            x: index * 50,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 1.5 - index * 0.15, // Staggered delay based on index
                            ease: "easeInOut",
                          }}
                        >
                          <Chip variant="secondary" size="lg">
                            {chipText}
                          </Chip>
                        </motion.div>
                      ),
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Earth with Shadow */}
              <motion.div
                className="absolute -bottom-[65vw] inset-x-0 flex justify-center items-center -z-10"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.8 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative"
                  style={{
                    filter:
                      "drop-shadow(15px 25px 50px rgba(0, 0, 0, 0.4)) drop-shadow(-5px -5px 20px rgba(255, 223, 0, 0.15)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.1))",
                  }}
                >
                  {/* Sunrise Shadow Overlay on Earth */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 80% at 20% 20%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.5) 100%)",
                      mixBlendMode: "multiply",
                    }}
                  ></div>
                  <Image
                    src={earth}
                    alt="earth"
                    className="size-[80vw] mx-auto opacity-70"
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {false && (
          <motion.div
            layoutId="bg-navbar"
            className="bg-background fixed inset-0  z-20 "
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 1.1,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <ShoppingBagDropdown />
    </>
  );
};

export default Navbar;
