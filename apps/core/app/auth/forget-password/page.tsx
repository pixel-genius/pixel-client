// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

// import icons
import PixelIcon from "@repo/icons/pxiel";
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";

const forgotPasswordpage = () => {
  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-[#262626] w-[450px] rounded-xl ">
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <PixelIcon size={86} color="currentColor" />
        <p className="text-2xl font-bold">Log in to your account</p>
      </div>
      {/* input */}
      <div className="w-96">
        <Label className="text-sm font-medium">Email</Label>
        <Input
          className="font-normal text-xs"
          placeholder="genius@exanpel.com"
          helperText={
            <a className="mt-4 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer">
              Here is information
            </a>
          }
        />
      </div>
      {/* button */}
      <div className="pb-7">
        <Button
          className="w-96 text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Reset{" "}
        </Button>
      </div>
    </div>
  );
};

export default forgotPasswordpage;
