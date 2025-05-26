import { Input, Separator } from "@repo/ui/components";
import { FileFormatSection } from "./file-format-section";
import { HighlightSection } from "./highlight-section";
import PriceSection from "./price-section";
import { ProductTabContentLayout } from "./product-tab-content-layout";

export const GeneralTab = () => {
  return (
    <ProductTabContentLayout title="Product Details">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 bg-card px-4 py-6 pb-10 rounded-lg">
        {/* Product Name and Blurb */}
        <div className="col-span-1">
          <Input label="Product Name" />
        </div>
        <div className="col-span-1">
          <Input
            label="Blurb"
            placeholder="Write a short and catchy description for your product."
          />
        </div>

        {/* Full-width Description */}
        <div className="col-span-full mb-4">
          <Input label="Description" placeholder="Rich Text Description" />
        </div>

        {/* Side-by-side PriceSection and Highlights */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
          <PriceSection />
          <Separator />
          <FileFormatSection />
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
          <HighlightSection />
          <Separator />
          <Input label="Tags" placeholder="Multi Select Tags" />
        </div>
      </div>
    </ProductTabContentLayout>
  );
};
