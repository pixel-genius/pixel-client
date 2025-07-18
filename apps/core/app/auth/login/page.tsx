import Link from "next/link";

// import components
// import icons
import { LoginForm } from "./_components/form/loginForm";
import AuthCard from "../_components/auth-card";

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

      <div className=" flex gap-2 pb-4 text-sm">
        <p>Don’t have an account?</p>
        <Link href={"/auth/signup"}>
          <p className="underline cursor-pointer">Sign up</p>
        </Link>
      </div>
    </AuthCard>
  );
};

export default LoginPage;
