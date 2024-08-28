// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

// import icons
import PixelIcon from "@repo/icons/pxiel";
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";

const LoginPage = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex items-center flex-col gap-4 bg-[#262626] w-[450px] rounded-xl ">
        {/* logo */}
        <div className=" pt-7 flex flex-col items-center">
          <PixelIcon size={86} color="currentColor" />
          <p className="text-2xl font-bold">Log in to your account</p>
        </div>
        {/* input */}
        <div className="w-96">
          <Label className="text-sm font-medium">User Name & Email</Label>
          <Input
            className="font-normal text-xs"
            placeholder="example@pixel.design "
          />
          <Label className="text-sm font-medium"> password</Label>
          <Input
            type="password"
            placeholder="********"
            helperText={
              <a className="mt-4 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer">
                Forgot password?
              </a>
            }
          />
        </div>
        {/* button */}
        <div>
          <Button className="w-96 text-lg" variant="secondary">
            Log in
          </Button>
        </div>
        {/* login with google and linkedin */}
        <div className="flex flex-col items-center gap-3">
          <Button className="w-96 text-lg" variant="secondary">
            <GoogleIcon size={24} />
            Log in with Google
          </Button>
          <Button className="w-96 text-lg" variant="secondary">
            <LinkedinIcon size={24} className="" />
            Log in with linkedin
          </Button>
        </div>
        {/* forgot password */}
        <div className=" flex gap-2 pb-4 text-sm">
          <p>Don’t have an account?</p> <a className="underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
