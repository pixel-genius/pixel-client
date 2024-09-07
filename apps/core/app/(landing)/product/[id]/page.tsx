import Adobexdicon from "@repo/icons/adobexd";
import Chevronrighticon from "@repo/icons/chevronright";
import Figmaicon from "@repo/icons/figma";
import Heart1icon from "@repo/icons/heart1";
import Instagram from "@repo/icons/instagram";
import Shopingcartplusicon from "@repo/icons/shoppingcartplus";
import Sketchicon from "@repo/icons/sketch";
import { Button } from "@repo/ui/components/button";
import Messagecircleicon from "@repo/icons/messagecircle";
import Circlecheckicon from "@repo/icons/Circlecheck";
import Clouddownloadicon from "@repo/icons/clouddownload";
import ProductFooter from "./_components/product-footer";

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 pb-36">
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
              <Heart1icon size={28} className="cursor-pointer" />
              <p>15</p>
            </div>
            <div className="flex gap-1">
              <Messagecircleicon size={28} className="cursor-pointer" />
              <p>+99</p>
            </div>
          </div>
        </div>
      </div>
      {/* product detail */}
      <div className="flex justify-around gap-3 pb-9 ">
        <div>
          <p className="text-6xl font-bold pb-3">
            Create Stunning Designs Using
          </p>
          <p className="text-4xl font-normal">
            Where Every Pixel Tells the Story of a Genius
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 opacity-45">
            <Figmaicon size={34} width={34} height={34} />
            <p className="text-2xl font-bold">Figma</p>
          </div>
          <div className="flex gap-2">
            <Adobexdicon size={34} width={34} height={34} />
            <p className="text-3xl font-bold">Adobe XD</p>
          </div>
          <div className="flex gap-2 opacity-45">
            <Sketchicon size={34} width={34} height={34} />
            <p className="text-2xl font-bold">Sketch</p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 pb-40">
        {/* summary of this product */}
        <div className="w-[70%]">
          <h2 className="text-4xl font-bold pb-6">Summary of this product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            debitis quam nostrum nam earum tempore, eos repellat quis numquam,
            ea accusamus praesentium quo sapiente cum, ipsum fugit itaque non
            illo sit. Praesentium dicta ut mollitia vel laboriosam quia!
            Officia, rem quisquam ut ipsa temporibus aliquam magni dolorum
            asperiores vitae corrupti in, voluptatibus commodi! Eaque quaerat
            tempora similique inventore consectetur alias numquam mollitia
            aperiam reprehenderit! Aut incidunt dignissimos nostrum facere
            doloribus nihil dicta magnam vero. Necessitatibus ratione hic
            similique unde delectus adipisci expedita quam, nobis esse
            excepturi, rerum nemo totam dignissimos ab fuga, a voluptas
            voluptatum eveniet odit voluptate? Atque, a.
          </p>
        </div>
        {/* highlights you can't miss */}
        <div className="w-[30%]">
          <h2 className="text-3xl font-bold pb-6">Highlights You Can’t Miss</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="flex gap-2 p-2 items-center">
                <Circlecheckicon
                  size={24}
                  className="opacity-15 text-success-400 bg-white rounded-full"
                />
                <p className="text-sm font-semibold">Fully Oraganised Layers</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="flex gap-2 p-2 items-center">
                <Circlecheckicon
                  size={24}
                  className="opacity-15 text-success-400 bg-white rounded-full"
                />
                <p className="text-sm font-semibold">Fully Oraganised Layers</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="flex gap-2 p-2 items-center">
                <Circlecheckicon
                  size={24}
                  className="opacity-15 text-success-400 bg-white rounded-full"
                />
                <p className="text-sm font-semibold">Fully Oraganised Layers</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4">
              <div className="flex gap-2 p-2 items-center">
                <Circlecheckicon
                  size={24}
                  className="opacity-15 text-success-400 bg-white rounded-full"
                />
                <p className="text-sm font-semibold">Fully Oraganised Layers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick look at */}
      <div className="">
        <p className="text-center text-4xl font-bold pb-7">
          Quick look at the product's key features and design elements.
        </p>
        <div className="w-[1350xp] h-[553px] bg-gray-500 rounded-xl mb-6"></div>
        <div className="flex gap-2 items-center pb-6">
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
          <p>#Moive</p>
        </div>
        <div className=" flex gap-3">
          <div className="flex gap-7 pb-14">
            <div className="flex gap-2">
              <p className="text-sm font-bold">Format :</p>
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
            <div className="flex gap-2">
              <Clouddownloadicon size={16} />
              <p>15.6 MB in1 File</p>
            </div>
          </div>
        </div>
      </div>
      {/* Comments */}
      <div className="bg-gray-700 rounded-lg">
        <div className="p-3 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold">Comments</h2>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img
                src="https://avatar.iran.liara.run/public/1"
                height={46}
                width={50}
                className="rounded-full mr-2"
              />
            </div>
            <div>
              <p className="text-2xl font-bold">Youssef Refaat</p>
              <p className="text-sm font-medium">
                Great work. I wonder what plugin/tool do you use to generate the
                colors palettes?I want to add my brand color and need it's
                shades and tints to be like them
              </p>
              <p className="">a month ago</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex justify-between">
            <div className="">
              <p className="font-light text-xs text-gray-600">Leave a comment, be nice.</p>
            </div>
            <div className="">
              <Button
                variant="default"
                className="bg-primary-600 text-foreground py-4 "
              >
                Submit Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* product Footer */}
      <ProductFooter />
    </div>
  );
};

export default ProductDetailPage;
