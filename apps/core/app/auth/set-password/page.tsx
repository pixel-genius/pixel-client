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
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

const setpasswordpage = () => {
  return (
    <AuthCard>
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-2xl font-bold">Set your Password</p>
          <p className="text-center">
            We've sent the code to{" "}
            <span className="underline">ali.kashef20@yahoo.com</span>
            check your email
          </p>
        </div>
      </div>
      {/* otp input */}
      <div>
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

      {/* input */}
      <div className=" w-full">
        <Label className="text-sm font-medium text-gray-400">
          New Password
        </Label>
        <Input
          className="font-normal text-xs text-gray-500"
          placeholder="********"
        />
      </div>
      <div className=" w-full">
        <Label className="text-sm font-medium text-gray-400">
          Confirm Password{" "}
        </Label>
        <Input
          className="font-normal text-xs text-gray-500"
          placeholder="********"
        />
      </div>
      {/* button reset */}
      <div className="pb-7 w-full">
        <Button
          className="w-full text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Reset{" "}
        </Button>
      </div>
    </AuthCard>
  );
};

export default setpasswordpage;
