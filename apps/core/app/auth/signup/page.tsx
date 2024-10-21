// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

// import icons
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";
import AuthCard from "../_components/auth-card";

const SignUpPage = () => {
  return (
    <AuthCard>
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <p className="text-2xl font-bold">Log in to your account</p>
      </div>
      {/* input */}
      <div className="w-full">
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
      <div className="w-full">
        <Button
          className="w-full text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Log in
        </Button>
      </div>
      {/* line  */}
      <div className="flex items-center w-full gap-3">
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
        <p className="text-base font-medium">OR</p>
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
      </div>
      {/* login with google and linkedin */}
      <div className="flex w-full flex-col items-center gap-3">
        <Button className=" w-full text-lg bg-[#181818]" variant="secondary">
          <GoogleIcon size={24} className="mr-2" />
          Log in with Google
        </Button>
        <Button className="w-full text-lg bg-[#181818]" variant="secondary">
          <LinkedinIcon size={24} className="mr-2" />
          Log in with linkedin
        </Button>
      </div>
      {/* forgot password */}
      <div className=" flex gap-2 pb-4 text-sm">
        <p>Don’t have an account?</p>{" "}
        <a className="underline cursor-pointer">Sign up</a>
      </div>
    </AuthCard>
  );
};

export default SignUpPage;
