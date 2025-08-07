import { Separator } from "@repo/ui/components/atoms/separator";
import { Input } from "@repo/ui/components/molecules/input";

import { PostProductsRequest } from "@repo/apis/core/shop/products/post/post-products.types";
import { ProductTabContentLayout } from "./product-tab-content-layout";
import { FileFormatSection } from "./file-format-section";
import { HighlightSection } from "./highlight-section";
import { useFormContext } from "react-hook-form";
import PriceSection from "./price-section";
import TagsField from "./tags-field";

export const GeneralTab = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PostProductsRequest>();

  return (
    <ProductTabContentLayout title="Product Details">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 bg-card px-4 py-6 pb-10 rounded-lg">
        {/* Product Name and Blurb */}
        <div className="col-span-1">
          <Input
            label="Product Name"
            {...register("versions.0.name")}
            error={errors.versions?.[0]?.name?.message}
            placeholder="Enter your product name"
          />
        </div>
        <div className="col-span-1">
          <Input
            label="Blurb"
            placeholder="Write a short and catchy description for your product."
            {...register("versions.0.blurb")}
            error={errors.versions?.[0]?.blurb?.message}
          />
        </div>

        {/* Full-width Description */}
        <div className="col-span-full mb-4">
          <Input
            label="Description"
            placeholder="Rich Text Description"
            {...register("versions.0.description")}
            error={errors.versions?.[0]?.description?.message}
          />
        </div>

        {/* Side-by-side PriceSection and Highlights */}
        <div className="col-span-2 xl:col-span-1 flex flex-col gap-8">
          {/* Price Section */}
          <PriceSection />
          <Separator />
          {/* File Format Section */}
          <FileFormatSection />
        </div>

        <div className="col-span-2 xl:col-span-1 flex flex-col gap-8">
          <Separator className="block xl:hidden" />
          {/* Highlight Section */}
          <HighlightSection />
          <Separator />
          {/* Tags Section */}
          <TagsField />
        </div>
      </div>
    </ProductTabContentLayout>
  );
};
