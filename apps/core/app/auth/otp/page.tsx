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
import AuthCard from "../_components/auth-card";
import { Countdown } from "@repo/ui/components/countdown";
import Link from "next/link";

const Otppage = () => {
  return (
    <AuthCard>
      {/* logo */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Email Verification</p>
          <p className="text-center text-sm font-normal">
            We've sent the code to{" "}
            <span className="underline text-sm font-normal">
              example@pixel.design
            </span>
          </p>
          <p className="text-sm font-normal">check your email</p>
        </div>
      </div>
      {/* otp input */}
      <div className="pb-6">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

      </div>

      {/* button */}
      <div className=" w-full">
        <Button
          className="w-full text-sm font-normal  bg-primary-600 hover:bg-primary-500"
          variant="primary"
        >
          Verify{" "}
        </Button>
      </div>
      <div className="pb-4">
        <p className="text-xs font-base text-foreground">
          didnt recieved code yet? <Countdown date={Date.now() + 120000} />
        </p>
      </div>
    </AuthCard>
  );
};

export default Otppage;
