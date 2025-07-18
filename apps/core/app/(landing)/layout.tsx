import Link from "next/link";

import Instagram from "@repo/icons/instagram";
import YouTubeIcon from "@repo/icons/youtube";
import Twitter from "@repo/icons/twitter";
import PixelIcon from "@repo/icons/pxiel";

import Linkedinicon from "../../../../packages/icons/src/components/linkedin";
import MenuNavigation from "./_components/mobile-menu/menu-navigation";
import HamburgerMenu from "./_components/mobile-menu/hamburger-menu";
import Navbar from "./_components/desktop-navbar/navbar";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar islogin={false} />
      <HamburgerMenu />

      <div className="relative z-10 bg-background pb-6 flex-1 md:mb-[532px] mb-[580px] min-h-screen overflow-x-hidden">
        {children}
      </div>

      <footer className="w-full bg-card rounded-t-[48px] py-24 fixed bottom-0 hidden md:block left-0">
        <div className="container ">
          <div className="flex flex-col sm:flex sm:flex-row gap-10 justify-between pb-28">
            {/* logo section */}
            <div className="">
              <div className="pb-8">
                <PixelIcon size={43} />
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex items-center gap-8">
                <Linkedinicon size={18} />
                <YouTubeIcon size={18} />
                <Twitter size={18} />
                <Instagram size={39} />
              </div>
            </div>

            {/* browse */}
            <div>
              <h2 className="pb-4 text-base font-bold">Browse</h2>
              <div className="flex gap-5">
                <div>
                  <ul className="flex flex-col gap-4 font-normal">
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        className="hover:text-"
                        prefetch={false}
                        aria-label="ui kits"
                      >
                        UI Kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="featured products"
                      >
                        Featured products
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="coded templates"
                      >
                        Coded Templates
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="wireframe kits"
                      >
                        Wireframe kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="illustrations"
                      >
                        Illustrations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-4 font-normal">
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="ui kits"
                      >
                        UI Kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="featured products"
                      >
                        Featured products
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="coded templates"
                      >
                        Coded Templates
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="wireframe kits"
                      >
                        Wireframe kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="illustrations"
                      >
                        Illustrations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-4 font-normal">
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="ui kits"
                      >
                        UI Kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="featured products"
                      >
                        Featured products
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="coded templates"
                      >
                        Coded Templates
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="wireframe kits"
                      >
                        Wireframe kits
                      </Link>
                    </li>
                    <li className="text-xs sm:text-sm">
                      <Link
                        href="/landing/product/id/page"
                        prefetch={false}
                        aria-label="illustrations"
                      >
                        Illustrations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* platform */}
            <div>
              <h2 className="pb-4 text-base font-bold">Platform</h2>
              <div>
                <ul className="flex flex-col gap-4 font-normal">
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="ui kits"
                    >
                      UI Kits
                    </Link>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="featured products"
                    >
                      Featured products
                    </Link>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="coded templates"
                    >
                      Coded Templates
                    </Link>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="wireframe kits"
                    >
                      Wireframe kits
                    </Link>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="illustrations"
                    >
                      Illustrations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* legal */}
            <div>
              <h2 className="pb-4 text-base font-bold">Legal</h2>
              <div>
                <ul className="flex flex-col gap-4 font-normal">
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="ui kits"
                    >
                      UI Kits
                    </Link>
                  </li>
                  <li className="text-xs sm:text-sm">
                    <Link
                      href="/landing/product/id/page"
                      prefetch={false}
                      aria-label="featured products"
                    >
                      Featured products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Pixel resevered footer */}
          <div className="flex justify-between">
            <div>
              <p>© 2023 Contrast. All rights reserved.</p>
            </div>
            <div>
              <p>Smile you're on Contrast :)</p>
            </div>
          </div>
        </div>
      </footer>
      <MenuNavigation />
    </div>
  );
}

export default Layout;
