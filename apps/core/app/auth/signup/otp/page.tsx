// import components
"use client";
import { Button } from "@repo/ui/components/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@repo/ui/components/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

// import icons
import AuthCard from "../../_components/auth-card";
import { Countdown } from "@repo/ui/components/countdown";
import { useSearchParams } from "next/navigation";

const OtpPage = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");


  return (
    <AuthCard>
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">
            We've sent the code to{" "}
            <a className="underline">{email}</a>
          </p>
          <p>check your email</p>
        </div>
      </div>
      {/* otp input */}
      <div>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} autoFocus/>
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* button */}
      <div className="pb-7 w-full">
        <Button
          className="w-full text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Verify{" "}
        </Button>
      </div>
      <div className="pb-7">
        <p>
          didnt recieved code yet? <Countdown date={Date.now() + 120000} />
        </p>
      </div>
    </AuthCard>
  );
};

export default OtpPage;
