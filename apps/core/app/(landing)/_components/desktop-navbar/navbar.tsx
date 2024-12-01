"use client";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Serchinicon from "../../../../../../packages/icons/src/components/serach";
import AnimatedNavBar from "./animated-navbar";
import Fechernabar from "./fecher-navbar";
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
            <Fechernabar islogin={islogin} />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
