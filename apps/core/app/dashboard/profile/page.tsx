"use client";

import Externallinkicon from "@repo/icons/External-link";
import Star1icon from "@repo/icons/Star-1";
import { Button } from "@repo/ui/components/button";
import { ModalCard } from "@repo/ui/components/modal-card";
import { ProductCard } from "@repo/ui/components/prodoct-card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MyProductsModalCard } from "./_components/my-products";
import { MyPortfolioModal, MyPortfolioModalCard } from "./_components/my-portfolio";

const Profilepage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="container mx-auto">
      <div className="pt-20">
        <div className=" flex gap-5 items-center pb-7">
          <div className="w-3/4 bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center pb-10">
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <img
                    src="https://avatar.iran.liara.run/public/44"
                    height={69}
                    width={69}
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium ">Ali Ebrahimi Kashef</p>
                  <p className="text-base font-light text-gray-400">
                    Product Design, Web Design
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  variant="default"
                  className="bg-primary-600 text-foreground "
                >
                  Contact Me
                </Button>
                <div>
                  <Externallinkicon size={30} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-4 pb-4">
                <h2 className="text-lg font-bold">Biography</h2>
                <p className="text-sm font-normal">
                  A freelance graphic and UI/UX designer. I specialise in Web
                  Design , logo and brand development, motion graphics, and
                  offer design services to business of all sizes ....
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold pb-4">Skills</h2>
                <div className="flex gap-2 items-center">
                  <div className="p-3 bg-[#181818] rounded">
                    <p className="text-sm font-medium">UI/UX</p>
                  </div>
                  <div className="p-3 bg-[#181818] rounded">
                    <p className="text-sm font-medium">Logo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold">Achievements</h2>
              <Externallinkicon size={30} className="cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 py-16">
              <Star1icon size={90} />
              <p className="text-sm font-normal text-gray-500 text-center">
                Achievements will appear here once you accomplish you first
                milestone
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center pb-7">
          <MyProductsModalCard />

          <MyPortfolioModalCard />
        </div>

        <div className="flex gap-5">
          <div className="w-2/3 bg-pink-600 p-6 rounded-lg">
            <div>
              <div className="pb-2">
                <h2 className="text-xl font-bold">Testimonia</h2>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-purple-600 p-6 rounded-lg">
            <div>
              <div>
                <h2 className="text-xl font-bold pb-2">Technology</h2>
                <div className="flex flex-wrap gap-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* click to see more */}
        {/* <div className="">
          <div className=" bg-gray-900 p-6 rounded-lg h-auto">
            <div className="flex justify-between items-center pb-10">
              <div className="flex gap-2 items-center">
                <div>
                  {" "}
                  <img
                    src="https://avatar.iran.liara.run/public/44"
                    height={69}
                    width={69}
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium ">Ali Ebrahimi Kashef</p>
                  <p className="text-base font-light text-gray-400">
                    Product Design, Web Design
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  variant="default"
                  className="bg-primary-600 text-foreground "
                >
                  Contact Me
                </Button>
                <div>
                  <Circlexicon size={30} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-4 pb-4">
                <h2 className="text-lg font-bold">Biography</h2>
                <p className="text-sm font-normal">
                  A freelance graphic and UI/UX designer. I specialise in Web
                  Design , logo and brand development, motion graphics, and
                  offer design services to business of all sizes ....
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold pb-4">Skills</h2>
                <div className="flex gap-2 items-center">
                  <div className="p-3 bg-[#181818] rounded">
                    <p className="text-sm font-medium">UI/UX</p>
                  </div>
                  <div className="p-3 bg-[#181818] rounded">
                    <p className="text-sm font-medium">Logo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* my products */}
        {/* <div className="bg-gray-900 p-6 rounded-lg h-auto">
          <div className="flex justify-between pb-4">
            <div>
              <h2 className="text-xl font-bold">My Products</h2>
            </div>
            <div>
              <Circlexicon size={30} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-2 items-center pb-4 ">
            <Button
              variant="default"
              className="px-4 py-2 text-foreground bg-primary-500"
            >
              All
            </Button>
            <Button variant="secondary" className="px-4 py-2 ">
              <Figmaicon size={16} className="mr-2" />
              Figma
            </Button>
          </div>
          <div className="flex gap-5 items-center flex-wrap">
          <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
          </div>
        </div> */}
        {/* My Portfolio */}
        {/* <div className="bg-gray-900 p-6 rounded-lg h-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">My Portfolio</h2>
            <Circlexicon size={30} className="cursor-pointer" />
          </div>
          <div className="flex gap-2 flex-wrap items-center ">
          <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                 <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                 <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                 <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
                 <ProductCard
                  image="https://picsum.photos/id/10/400/300"
                  title="title"
                  price="price"
                  username="username"
                  see={10}
                  like={10}
                />
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Profilepage;
