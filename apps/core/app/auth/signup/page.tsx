// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

// import icons
import PixelIcon from "@repo/icons/pxiel";
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";

const SignUpPage = () => {
  return (
    <div className="flex items-center relative z-10 flex-col gap-4 bg-[#262626] w-[450px] rounded-xl ">
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <PixelIcon size={86} color="currentColor" />
        <p className="text-2xl font-bold">Log in to your account</p>
      </div>
      {/* input */}
      <div className="w-96">
        <Label className="text-sm font-medium">Username</Label>
        <Input className="font-normal text-xs" placeholder="pixel.design " />
        <Label className="text-sm font-medium">User Name & Email</Label>
        <Input
          className="font-normal text-xs"
          placeholder="example@pixel.design "
        />
        <Label className="text-sm font-medium"> password</Label>
        <Input type="password" placeholder="********" />
      </div>
      {/* button */}
      <div>
        <Button
          className="w-96 text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Log in
        </Button>
      </div>
      {/* line  */}
      <div className="flex items-center w-[380px] gap-3">
        <div className="w-[174px] h-[1px] bg-gray-700 rounded-full"></div>
        <p className="text-base font-medium">OR</p>
        <div className="w-[174px] h-[1px] bg-gray-700 rounded-full"></div>
      </div>
      {/* login with google and linkedin */}
      <div className="flex flex-col items-center gap-3">
        <Button className="w-96 text-lg bg-[#181818]" variant="secondary">
          <GoogleIcon size={24} className="mr-2" />
          Log in with Google
        </Button>
        <Button className="w-96 text-lg bg-[#181818]" variant="secondary">
          <LinkedinIcon size={24} className="mr-2" />
          Log in with linkedin
        </Button>
      </div>
      {/* forgot password */}
      <div className=" flex gap-2 pb-4 text-sm">
        <p>Don’t have an account?</p>{" "}
        <a className="underline cursor-pointer">Sign up</a>
      </div>
    </div>
  );
};

export default SignUpPage;
