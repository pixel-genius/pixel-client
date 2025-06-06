import {
  TabContent,
  TabList,
  TabProvider,
  TabTrigger,
  ProductCard,
} from "@repo/ui/components";
import {
  ProductListUiUx,
  ProductList3D,
  ProductListGraphic,
} from "../_constant/mock-product-list";
import { Suspense } from "react";
import { LandingTabContents } from "./landing-tab-contents";

export const LandingTabs = () => {
  return (
    <div className="mb-44">
      <TabProvider defaultValue="trend">
        <TabList>
          <TabTrigger value="trend">Trends</TabTrigger>
          <TabTrigger value="uiux">UIUX</TabTrigger>
          <TabTrigger value="3d">3D Model</TabTrigger>
          <TabTrigger value="graphic">Graphic Design</TabTrigger>
        </TabList>
        <TabContent value="trend">
          <Suspense fallback={"Loading ..."}>
            <LandingTabContents />
          </Suspense>
        </TabContent>
        <TabContent value="uiux">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductListUiUx.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
        <TabContent value="3d">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductList3D.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
        <TabContent value="graphic">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductListGraphic.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.image}
                avatar={product.avatar}
                username={product.username}
                like={product.like}
              />
            ))}
          </div>
        </TabContent>
      </TabProvider>
    </div>
  );
};
