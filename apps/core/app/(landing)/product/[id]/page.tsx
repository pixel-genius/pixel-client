import Adobexdicon from "@repo/icons/adobexd";
import Chevronrighticon from "@repo/icons/chevronright";
import Figmaicon from "@repo/icons/figma";
import Heart1icon from "@repo/icons/heart1";
import Instagram from "@repo/icons/instagram";
import Shopingcartplusicon from "@repo/icons/shoppingcartplus";
import Sketchicon from "@repo/icons/sketch";
import { Button } from "@repo/ui/components/button";
import Messagecircleicon from "@repo/icons/messagecircle";

const ProductDetailPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <p className="text-5xl font-medium">Dyser - Finance Admin</p>
        <p className="text-5xl font-medium">Dashboard UI Kit</p>
      </div>
      <div>
        <p className="text-2xl font-normal">
          Payment and Subscription Management Web App
        </p>
      </div>
      <div className="flex gap-2">
        <Instagram size={32} />
        <p>Pixeam</p>
        <Chevronrighticon size={24} />
        <p>Figma Resources</p>
        <div className="flex ">
          <div className="flex justify-center items-center bg-background rounded-full p-1.5">
            <Figmaicon size={16} />
          </div>

          <div className="flex  -ml-2 justify-center items-center bg-background rounded-full p-1.5">
            <Adobexdicon size={16} />
          </div>

          <div className="flex -ml-3 justify-center items-center bg-background rounded-full p-1.5">
            <Sketchicon size={16} />
          </div>
        </div>
      </div>

      <div className="flex  gap-2">
        <Button
          variant="default"
          className="bg-primary-600 text-foreground h-auto py-4 w-36"
        >
          Buy Now <Shopingcartplusicon size={24} className="ml-2" />
        </Button>

        <Button variant="default" className="w-36 h-auto !py-4">
          Preview{" "}
        </Button>

        <div className="flex  flex-col">
          <div className="flex gap-1">
            <Heart1icon size={28} />
            <p>15</p>
          </div>
          <div className="flex gap-1">
            <Messagecircleicon size={28} />
            <p>+99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
