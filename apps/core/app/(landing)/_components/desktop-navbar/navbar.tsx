"use client";
import PixelIcon from "@repo/icons/pxiel";
import SearchIcon from "@repo/icons/serach";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedNavBar from "./animated-navbar";
import Fechernabar from "./feather-navbar";
import Searchbar, { RefSearchHandle } from "./search-bar";
import Menu2icon from "@repo/icons/menu-2";
import Addtocard from "../addtoCard";

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

  const isMobile = true;

  return (
    <nav className="bg-card overflow-hidden  rounded-xl fixed top-12 -left-1/2 -right-1/2 z-40   w-[95%] sm:w-[90%] lg:w-[962px]  mx-auto">
      <div className="flex  items-center  h-full  justify-between px-5 py-3 ">
        <div className="flex items-center w-full">
          <div className="flex  items-center">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => setIsSearchVisible(true)}
            >
              {!isSearchActive && !isSearchVisible && (
                <motion.div
                  className="flex items-center w-full overflow-hidden whitespace-nowrap"
                  key="default"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="pr-3">
                    <PixelIcon size={43} />
                  </div>
                  {!isMobile && <AnimatedNavBar />}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Icon */}
            <div onClick={handleOpenSearch} className="cursor-pointer">
              <SearchIcon size={24} color="white" />
            </div>
          </div>

          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsSearchVisible(false)}
          >
            {isSearchActive && isSearchVisible && (
              <Searchbar ref={refSerchHandle} onClose={handleCloseSearch} />
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
              <Fechernabar islogin={islogin} />
              {/*  mobile menu  */}
              {isMobile && <>{/* <Menu2icon size={25} color="white" /> */}</>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Addtocard />
    </nav>
  );
};

export default Navbar;
