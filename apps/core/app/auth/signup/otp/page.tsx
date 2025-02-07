import Link from "next/link";
import AuthCard from "../../_components/auth-card";
import { SignupOtpForm } from "./_components/signup-otp-form";
import { redirect } from "next/navigation";

type SearchParams = {
  username: string | string[] | undefined;
  email: string | string[] | undefined;
};

const SignupOtpPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const username = Array.isArray(searchParams.username)
    ? searchParams?.username[0]
    : searchParams.username;
  if (!searchParams.email) {
    redirect("/auth/signup");
  }

  return (
    <AuthCard>
      {/* Header */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">
            We've sent the code to{" "}
            <Link href="/auth/signup" className="underline">
              {searchParams.email}
            </Link>
          </p>
          <p>check your email</p>
        </div>
      </div>

      {/*  Form */}
      <SignupOtpForm username={username} />
    </AuthCard>
  );
};

export default SignupOtpPage;
