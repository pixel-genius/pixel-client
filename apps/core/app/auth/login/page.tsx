import Link from "next/link";

// import components
import AuthCard from "../_components/auth-card";

// import icons
import { LoginForm } from "./_components/form/loginForm";

const LoginPage = () => {
  return (
    <AuthCard>
      <div className="flex flex-col gap-1 items-center pb-5">
        <p className="text-2xl font-bold">Log in to your account</p>
        <p className="text-sm font-normal">
          Log in to explore, manage, and enjoy all the features.
        </p>
      </div>

      <LoginForm />
      {/* line  */}
      {/* <div className="flex items-center w-full gap-3">
        <div className="w-full h-[1px] bg-gray-700 rounded-full" />
        <p className="text-base font-medium">OR</p>
        <div className="w-full h-[1px] bg-gray-700 rounded-full" />
      </div> */}
      {/* login with google and linkedin */}
      {/* <div className="w-full flex flex-col items-center gap-3">
        <Button
          className="w-full text-lg bg-background"
          variant="secondary"
          size={"lg"}
        >
          <GoogleIcon size={24} className="mr-2" />
          Log in with Google
        </Button>
        <Button
          className="w-full text-lg bg-background"
          variant="secondary"
          size={"lg"}
        >
          <LinkedinIcon size={24} className="mr-2" />
          Log in with linkedin
        </Button>
      </div> */}
      {/* forgot password */}
      <div className=" flex gap-2 pb-4 text-sm">
        <p>Don’t have an account?</p>
        <Link href={"/auth/signup"} prefetch={false}>
          <p className="underline cursor-pointer">Sign up</p>
        </Link>
      </div>
    </AuthCard>
  );
};

export default LoginPage;
