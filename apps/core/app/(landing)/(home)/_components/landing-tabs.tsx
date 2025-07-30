import { TabProvider } from "@repo/ui/components/molecules/tabs/tab-provider";
import { TabTrigger } from "@repo/ui/components/molecules/tabs/tab-trigger";
import { TabContent } from "@repo/ui/components/molecules/tabs/tab-content";
import { ProductCard } from "@repo/ui/components/molecules/product-card";
import { TabList } from "@repo/ui/components/molecules/tabs/tab-list";

import {
  ProductList,
  ProductList3D,
  ProductListGraphic,
  ProductListUiUx,
} from "../../_constant/mock-product-list";
import { LandingTabContents } from "./landing-tab-contents";

export const LandingTabs = ({ defaultValue }: { defaultValue: string }) => {
  return (
    <div className="mb-44">
      <TabProvider defaultValue={defaultValue}>
        <TabList className="justify-center">
          <TabTrigger value="/" href="/">
            Trends
          </TabTrigger>
          <TabTrigger value="uiux" href="/uiux">
            UIUX
          </TabTrigger>
          <TabTrigger value="3d" href="/3d">
            3D Model
          </TabTrigger>
          <TabTrigger value="graphic" href="/graphic">
            Graphic Design
          </TabTrigger>
        </TabList>
        <TabContent value="/">
          {/* <LandingTabContents /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            {ProductList.map((product) => (
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
