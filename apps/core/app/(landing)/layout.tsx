import Instagram from "@repo/icons/instagram";
import PixelIcon from "@repo/icons/pxiel";
import Twitter from "@repo/icons/twitter";
import YouTubeIcon from "@repo/icons/youtube";
import Linkedinicon from "../../../../packages/icons/src/components/linkedin";
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="flex flex-col h-full">
      <nav className="bg-gray-900 px-5 py-3 h-11 rounded-xl fixed top-12 -left-1/2 -right-1/2 z-[500]  w-[962px] mx-auto flex justify-between items-center">
        nav bar
      </nav>

      <div className="pt-32 grow ">{children}</div>

      <footer className="w-full  bg-[#111827] py-24">
        <div className="container">
          <div className="flex gap-10 justify-between pb-28">
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
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">UI Kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Featured products</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Coded Templates</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Wireframe kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Illustrations</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-4 font-normal">
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">UI Kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Featured products</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Coded Templates</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Wireframe kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Illustrations</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-4 font-normal">
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">UI Kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Featured products</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Coded Templates</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Wireframe kits</li>
                    </Link>
                    <Link href="/landing/product/id/page" prefetch={false}>
                      <li className="text-sm">Illustrations</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            {/* platform */}
            <div>
              <h2 className="pb-4 text-base font-bold">Platform</h2>
              <div>
                <ul className="flex flex-col gap-4 font-normal">
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">UI Kits</li>
                  </Link>
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">Featured products</li>
                  </Link>
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">Coded Templates</li>
                  </Link>
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">Wireframe kits</li>
                  </Link>
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">Illustrations</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* legal */}
            <div>
              <h2 className="pb-4 text-base font-bold">Legal</h2>
              <div>
                <ul className="flex flex-col gap-4 font-normal">
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">UI Kits</li>
                  </Link>
                  <Link href="/landing/product/id/page" prefetch={false}>
                    <li className="text-sm">Featured products</li>
                  </Link>
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
    </div>
  );
}

export default Layout;
