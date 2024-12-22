import Link from "next/link";
import AuthCard from "../../_components/auth-card";
import { SignupOtpForm } from "./_components/signup-otp-form";
import { redirect } from "next/navigation";

type SearchParams = { otp: string | string[] | undefined };

const SignupOtpPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const email = Array.isArray(searchParams.otp)
    ? searchParams.otp[0]
    : searchParams.otp;

  if (!email) {
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
              {email}
            </Link>
          </p>
          <p>check your email</p>
        </div>
      </div>

      {/*  Form */}
      <SignupOtpForm email={email} />
    </AuthCard>
  );
};

export default SignupOtpPage;
