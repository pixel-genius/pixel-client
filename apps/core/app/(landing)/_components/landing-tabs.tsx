"use client";

import {
  TabContent,
  TabList,
  TabProvider,
  TabTrigger,
} from "@repo/ui/components";
import { ProductCard } from "@repo/ui/components";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import {
  ProductList,
  ProductListUiUx,
  ProductList3D,
  ProductListGraphic,
} from "../_constant/mock-product-list";

export const LandingTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setSearchParams = (params: URLSearchParams) => {
    router.push(`?${params.toString()}`);
  };

  const tabSearchProps = { searchParams, setSearchParams };

  return (
    <div className="mb-44">
      <TabProvider defaultValue="trend">
        <TabList>
          <TabTrigger value="trend" {...tabSearchProps}>
            Trends
          </TabTrigger>
          <TabTrigger value="uiux" {...tabSearchProps}>
            UIUX
          </TabTrigger>
          <TabTrigger value="3d" {...tabSearchProps}>
            3D Model
          </TabTrigger>
          <TabTrigger value="graphic" {...tabSearchProps}>
            Graphic Design
          </TabTrigger>
        </TabList>
        <TabContent value="trend" {...tabSearchProps}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductList.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                username={product.username}
                see={product.see}
                avatar={product.avatar}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
        <TabContent value="uiux" {...tabSearchProps}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductListUiUx.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                see={product.see}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
        <TabContent value="3d" {...tabSearchProps}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductList3D.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                see={product.see}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
        <TabContent value="graphic" {...tabSearchProps}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductListGraphic.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                see={product.see}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
      </TabProvider>
    </div>
  );
};
