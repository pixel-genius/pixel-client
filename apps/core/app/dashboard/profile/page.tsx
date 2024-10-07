"use client";

import { useState } from "react";
import { AchievementsModalCard } from "./_components/achievements";
import { BiographyModalCard } from "./_components/biography";
import { MyPortfolioModalCard } from "./_components/my-portfolio";
import { MyProductsModalCard } from "./_components/my-products";

const Profilepage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="container mx-auto">
      <div className="pt-20">
        <div className=" flex gap-5 items-center pb-7">
          <BiographyModalCard />
          <AchievementsModalCard />
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
      </div>
    </div>
  );
};

export default Profilepage;
