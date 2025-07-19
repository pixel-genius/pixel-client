import { redirect } from "next/navigation";
import Link from "next/link";

import { SignupOtpForm } from "./_components/signup-otp-form";
import AuthCard from "../../_components/auth-card";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const SignupOtpPage = async ({ searchParams }: Props) => {
  const resolvedParams = await searchParams;
  const username = Array.isArray(resolvedParams.username)
    ? resolvedParams?.username[0]
    : resolvedParams.username;
  if (!resolvedParams.email) {
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
              {resolvedParams.email}
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
