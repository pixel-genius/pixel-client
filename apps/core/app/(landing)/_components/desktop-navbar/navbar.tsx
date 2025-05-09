"use client";
import PixelIcon from "@repo/icons/pxiel";
import SearchIcon from "@repo/icons/serach";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Addtocard from "../addtoCard";
import NavbarLinks from "./navbar-links";
import FeaturesNavbar from "./features-navbar";
import Searchbar, { RefSearchHandle } from "./search-bar";
import { BrowseMegaMenu } from "../browseMegaMenu/browse-mega-menu";
import { useMegaMenuStore } from "../../store/mega-menu";
import { useCartStore } from "../../store/cart-store";

const Navbar = ({ islogin }: { islogin: boolean }) => {
  const { isOpenMegaMenu } = useMegaMenuStore();
  const { isAddToCartOpen } = useCartStore();

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

  const isMobile = false;

  return (
    <div className="bg-background shadow-box rounded-xl fixed top-12 -left-1/2 -right-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[962px] max-w-none mx-auto">
      <div className="flex  py-3 px-5 items-center h-full w-full justify-between ">
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
                  exit={{ opacity: 1, width: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="pr-5">
                    <PixelIcon size={36} />
                  </div>
                  <div className="pr-4">{!isMobile && <NavbarLinks />}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Icon */}
            <div
              onClick={handleOpenSearch}
              className="cursor-pointer"
              id="search-product-btn"
            >
              <SearchIcon size={20} />
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
              <FeaturesNavbar islogin={islogin} />
              {/*  mobile menu  */}
              {isMobile && <>{/* <Menu2icon size={25} color="white" /> */}</>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {isAddToCartOpen && (
          <motion.div
            className="overflow-hidden rounded-b-xl"
            initial={{ opacity: 0, height: "0px" }}
            animate={{ opacity: 1, height: "527px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.5 },
              opacity: { duration: 0.3 },
            }}
          >
            <Addtocard />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isOpenMegaMenu && (
          <motion.div
            className="overflow-hidden rounded-b-xl"
            initial={{ opacity: 0, height: "0px" }}
            animate={{ opacity: 1, height: "290px" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.5 },
              opacity: { duration: 0.3 },
            }}
          >
            <BrowseMegaMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
