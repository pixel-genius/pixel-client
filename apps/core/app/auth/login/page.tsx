// import components
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

// import icons
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";
import AuthCard from "../_components/auth-card";
import Link from "next/link";

const LoginPage = () => {
  return (
    <AuthCard>
      <p className="text-2xl font-bold">Log in to your account</p>
      {/* input */}
      <div className="w-full">
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
            <Link href={"/auth/forget-password"} prefetch={false}>
              <p className="mt-4 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer">
                Forgot password?
              </p>
            </Link>
          }
        />
      </div>
      {/* button */}
      <div className="w-full">
        <Button
          className="w-full text-lg font-bold bg-primary-600 hover:bg-primary-500"
          variant="secondary"
          size={"lg"}
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
      <div className="w-full flex flex-col items-center gap-3">
        <Button
          className="w-full text-lg bg-[#181818]"
          variant="secondary"
          size={"lg"}
        >
          <GoogleIcon size={24} className="mr-2" />
          Log in with Google
        </Button>
        <Button
          className="w-full text-lg bg-[#181818]"
          variant="secondary"
          size={"lg"}
        >
          <LinkedinIcon size={24} className="mr-2" />
          Log in with linkedin
        </Button>
      </div>
      {/* forgot password */}
      <div className=" flex gap-2 pb-4 text-sm">
        <p>Don’t have an account?</p>{" "}
        <Link href={"/auth/signup"} prefetch={false}>
          <p className="underline cursor-pointer">Sign up</p>
        </Link>
      </div>
    </AuthCard>
  );
};

export default LoginPage;
