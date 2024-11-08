import Adobexdicon from "@repo/icons/adobexd";
import Circleplusicon from "@repo/icons/circle-plus";
import Figmaicon from "@repo/icons/figma";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Switch } from "@repo/ui/components/switch";
import { Textarea } from "@repo/ui/components/textarea";

const ProductGeneral = () => {
  return (
    <div className="bg-gray-900  rounded-lg p-4 mt-4">
      {/* headline */}
      <div>
        <h1 className="text-base font-bold">Product Details</h1>
      </div>
      {/* inpiut */}
      <div className="flex gap-2 w-full">
        <div className="w-1/2">
          <Label className="text-xs font-normal">Product Name</Label>
          <Input placeholder="Search" className="" />
        </div>
        <div className="w-1/2">
          <Label>Product Name</Label>
          <Input placeholder="Search" className="" />
        </div>
      </div>
      {/* textarea */}
      <div className="pb-4">
        <p className="text-xs font-normal pb-1">Product Description</p>

        <Textarea
          placeholder="Heading1"
          className="w-full h-[186px] text-sm p-4"
        />
      </div>
      <div className=" flex gap-3">
        <div className="w-1/2">
          <div className="pb-5">
            <p className="text-base font-bold">Choose the right price!</p>
            <p className="text-xs font-normal text-gray-500">
              Remember, the right pricing can bring you more sales.
            </p>
          </div>
          <div className="pb-4">
            <Label className="text-xs font-normal text-gray-500">Price</Label>
            <Input placeholder="0" />
          </div>
          <div>
            <div className="flex items-center justify-between pb-2">
              <div>
                <p className="text-xs font-light">Set a discount</p>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <Button
                variant="secondary"
                className="w-12 h-9 text-sm font-light bg-primary-500"
              >
                50%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                55%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                60%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                65%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                70%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                75%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                80%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                85%
              </Button>
              <Button variant="outline" className="w-12 h-9 text-sm font-light">
                90%
              </Button>
            </div>
          </div>
          <div className="h-0.5 bg-gray-700 w-auto rounded mt-10 mb-10"></div>
          <div className="">
            <div className="pb-6">
              <p className="text-base font-bold">File Formats Included</p>
              <p className="text-xs font-normal text-gray-500">
                Specify the file formats that customers can download after
                purchase.
              </p>
            </div>
            {/* file formats button */}
            <div className="flex gap-2 flex-wrap items-center ">
              <Button
                variant="secondary"
                className=" w-auto h-auto text-sm font-light bg-primary-500"
              >
                <Figmaicon size={16} className="mr-1" />
                Figma
              </Button>
              <Button
                variant="secondary"
                className=" w-auto h-auto text-sm font-light "
              >
                <Adobexdicon size={16} className="mr-1" />
                Adobe XD
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-lg font-bold pb-6">Product Highlights</h2>
            <div className="bg-gray-800 rounded-lg flex flex-col justify-center items-center gap-3 h-[467px]">
              <div>
                <Circleplusicon size={80} color="currentColor" />
              </div>
              <div>
                <p className="text-sm font-normal text-center">
                  Click on top button to add Highlights for your product
                </p>
              </div>
              <div>
                <p className="text-sm font-normal text-gray-500 text-center">
                  Enter key features and highlights of your product here (e.g.,
                  unique capabilities, special design)
                </p>
              </div>
            </div>
          </div>
          <div className="h-0.5 bg-gray-700 w-auto rounded mt-10 mb-10"></div>
          {/* Live Preview Link */}
          <div className="pb-2">
            <p className="text-lg font-bold ">Live Preview Link</p>
            <p className="text-xs font-normal text-gray-500">
              The preview link allows customers to view the live version of your
              product.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              label="Live preview link"
              placeholder="https://www.myportfolio.com"
            />
            <Input
              label="Video and Prototype embed "
              placeholder="<iframe src='...'></iframe>"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGeneral;
