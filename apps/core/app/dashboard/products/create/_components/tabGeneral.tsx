import Typography from "@repo/ui/components/typography";
import { FileFormatSection } from "./file-formate-section";
import PriceSection from "./price-section";
import { Input } from "@repo/ui/components/input";
import { Separator } from "@repo/ui/components/separator";
import { HighlightSection } from "./highlight-section";

export const TabGeneral = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
      {/* Full-width header */}
      <div className="col-span-full">
        <Typography variant="label/lg" weight="bold">
          Product Details
        </Typography>
      </div>

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
      <div className="col-span-1 flex flex-col gap-8">
        <PriceSection />
        <Separator />
        <FileFormatSection />
      </div>

      <div className="col-span-1 flex flex-col gap-8">
        <HighlightSection />
        <Separator />
        <Input label="Tags" placeholder="Multi Select Tags" />
      </div>
    </div>
  );
};
