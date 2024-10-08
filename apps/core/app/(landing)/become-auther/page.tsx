import { Button } from "@repo/ui/components/button";
import { FormLabel } from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";

const BecomeAuther = () => {
  return (
    <div className="container mx-auto">
      <div className="flex ">
        <div className="w-1/2">
          {/* Become an Author */}
          <div className="pb-7">
            <h1 className="text-2xl font-bold">Become an Author</h1>
            <p className="text-xl font-medium text-gray-500">
              Join the talented community of designers at PixelGenius by
              invitation or by submitting your application using the form below.
            </p>
          </div>
          {/* information */}
          <div className="flex flex-col gap-1 w-3/4">
            <h2 className="text-lg font-medium">Apply to Open a Shop</h2>
            {/* input email */}
            <div>
              <Input
                placeholder="exm@gmail.com"
                type="email"
                className=""
                label="Email"
              />
            </div>
            {/* input name and last name */}
            <div className="flex gap-2">
              <Input placeholder="Pixel" className="" label="First Name" />
              <Input placeholder="Genius" className="" label="Last Name" />
            </div>
            {/* Portfolio Link */}
            <div>
              <Input
                placeholder="https://www.myportfolio.com"
                className=""
                label="Portfolio Link"
              />
            </div>
            {/* chose your file  */}
            <div className="">
              <Input
                placeholder="Choose your file"
                type="file"
                label="Upload Your CV and Portfolio"
              />
            </div>
            {/* Additional information */}
            <div>
              <Label className="font-normal text-gray-400">
                Additional Information
              </Label>
              <Textarea
                placeholder="write a short message about yourself"
                className="resize-none p-3 "
              />
            </div>
            {/* submit button */}
            <div>
              <Button variant="outline" className="w-full bg-primary-600">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      {/* iteam section */}
    </div>
  );
};

export default BecomeAuther;
