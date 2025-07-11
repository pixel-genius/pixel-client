import { ProductCard } from "@repo/ui/components";
import { use } from "react";
import { getProductVersionList } from "@repo/apis/core/shop/product-version/get/get-product-version-list";

export const LandingTabContents = () => {
  const data = use(getProductVersionList({ page: 1, pageSize: 9 }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
      {data?.data?.data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          image={
            "https://images.ui8.net/product/5cc0ad3782d17730efc0e09c/604_420_2.webp"
          } //TODO: change to image
          username={product.name} //TODO: change to username
          avatar={
            "https://images.ui8.net/product/5cc0ad3782d17730efc0e09c/604_420_2.webp"
          } //TODO: change to avatar
          like={Number(product.like_count)}
        />
      ))}
    </div>
  );
};
