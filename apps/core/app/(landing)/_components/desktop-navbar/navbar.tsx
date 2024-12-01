"use client";
import PixelIcon from "@repo/icons/pxiel";
import Link from "next/link";
import Serchinicon from "../../../../../../packages/icons/src/components/serach";
import Shoppingbagicon from "@repo/icons/shopping-bag";
import { useRef, useState } from "react";
import Heart1icon from "@repo/icons/heart1";

import { motion, AnimatePresence } from "framer-motion";
import { BaseInput } from "@repo/ui/components/base-input";
import Xicon from "@repo/icons/x";
import AnimatedNavBar from "./animated-navbar";
import SearchBar, { RefSearchHandle } from "./search-bar";

const Navbar = ({ islogin }: { islogin: boolean }) => {
  // isSeaching state

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const refSerchHandle = useRef<RefSearchHandle>(null);

  const handleOpenSearch = () => {
    setIsSearchActive(true);
    console.log(refSerchHandle.current);
    // not working
    refSerchHandle.current?.focus();
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
  };

  console.log("isSearchActive", isSearchActive);

  return (
    <nav className="bg-gray-900 overflow-hidden px-5 py-3 h-14 rounded-xl fixed top-12 -left-1/2 -right-1/2 z-[500]   w-[962px] mx-auto">
      <div className="flex  items-center  h-full  justify-between ">
        <div className="flex items-center w-full">
          <div className="flex  items-center">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => setIsSearchVisible(true)}
            >
              {!isSearchActive && !isSearchVisible && <AnimatedNavBar />}
            </AnimatePresence>

            {/* Search Icon */}
            <div onClick={handleOpenSearch} className="cursor-pointer">
              <Serchinicon size={24} color="white" />
            </div>
          </div>

          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsSearchVisible(false)}
          >
            {isSearchActive && isSearchVisible && (
              <SearchBar ref={refSerchHandle} onClose={handleCloseSearch} />
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {/* login and sign up and cart */}
          {!isSearchActive && !isSearchVisible && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center "
            >
              {islogin && (
                <div className="flex  flex-shrink-0 items-center gap-3">
                  <Heart1icon size={24} color="white" />
                  <Shoppingbagicon size={24} color="white" />
                  <img
                    src="https://avatar.iran.liara.run/public/26"
                    alt="avatar"
                    className="w-11 h-11 rounded-full"
                  />
                </div>
              )}
              {!islogin && (
                <div className="flex items-center gap-3">
                  <Shoppingbagicon size={24} color="white" />
                  <Link
                    href="/"
                    className="text-sm font-medium text-primary-500"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/"
                    className="text-sm font-medium text-primary-500"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
