"use client";
import PixelIcon from "@repo/icons/pxiel";
import SearchIcon from "@repo/icons/serach";
import { useRef, useState } from "react";
import Addtocard from "../addtoCard";
import NavbarLinks from "./navbar-links";
import FeaturesNavbar from "./features-navbar";
import Searchbar, { RefSearchHandle } from "./search-bar";
import { BrowseMegaMenu } from "../browseMegaMenu/browse-mega-menu";
import { useMegaMenuStore } from "../../store/mega-menu";
import { useCartStore } from "../../store/cart-store";
import ShoppingBagDropdown from "../shopping-bag-dropdown";
import Link from "next/link";


const Navbar = ({ islogin }: { islogin: boolean }) => {
  const { isOpenMegaMenu } = useMegaMenuStore();
  const { isAddToCartOpen } = useCartStore();

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const refSerchHandle = useRef<RefSearchHandle>(null);

  const handleOpenSearch = () => {
    setIsSearchActive(true);
    refSerchHandle.current?.focus();
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
  };

  const isMobile = false;

  return (
    <>
      <div id="navbar" className="bg-background shadow-box rounded-xl fixed top-12 -left-1/2 -right-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[962px] max-w-none mx-auto hidden md:block">
        <div className="flex py-3 px-5 items-center h-full w-full justify-between">
          <div className="flex items-center w-full">
            <div className="flex items-center">
              {!isSearchActive && !isSearchVisible && (
                <div className="flex items-center w-full overflow-hidden whitespace-nowrap">
                  <div className="pr-5">
                    <Link href="/">
                      <PixelIcon size={45} />
                    </Link>
                  </div>
                  <div className="pr-4">{!isMobile && <NavbarLinks />}</div>
                </div>
              )}

              {/* Search Icon */}
              <div className="cursor-pointer">
                <SearchIcon size={20} />
              </div>
            </div>

            {isSearchActive && isSearchVisible && (
              <Searchbar ref={refSerchHandle} onClose={handleCloseSearch} />
            )}
          </div>

          {/* login and sign up and cart */}
          {!isSearchActive && !isSearchVisible && (
            <div className="flex items-center">
              <FeaturesNavbar islogin={islogin} />
              {isMobile && <>{/* <Menu2icon size={25} color="white" /> */}</>}
            </div>
          )}
        </div>

        {isOpenMegaMenu && (
          <div className="overflow-hidden rounded-b-xl h-[290px]">
            <BrowseMegaMenu />
          </div>
        )}
      </div>

      <ShoppingBagDropdown />
    </>
  );
};

export default Navbar;
