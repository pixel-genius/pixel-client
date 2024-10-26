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
import { Input } from "@repo/ui/components/input";
import AuthCard from "../_components/auth-card";
import useSetPassword from "./_useSetPassword";

const setpasswordpage = () => {
  const { username, register, errors, setValue, handleSubmitForm } =
    useSetPassword();
  const otpRegister = register("otp");
  return (
    <AuthCard>
      {/* logo */}
      <div className=" pt-7 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-2xl font-bold">Set your Password</p>
          <p className="text-center">
            We've sent the code to{" "}
            <span className="underline mr-1">{username}</span>
            check your email
          </p>
        </div>
      </div>
      {/* otp input */}
      <form
        className="w-full flex flex-col items-center gap-4"
        onSubmit={handleSubmitForm}
      >
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          name={otpRegister.name}
          onChange={(value: string) => {
            setValue("otp", value);
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <span className="text-xs text-error-400">{errors.otp?.message}</span>

        {/* input */}
        <Input
          label="Password"
          className="font-normal text-xs text-gray-500"
          placeholder="********"
          {...register("new_password", {
            min: 8,
            required: "Password is required",
          })}
          error={errors.new_password?.message}
        />
        <Input
          label="Confirm Password"
          className="font-normal text-xs text-gray-500"
          placeholder="********"
          {...register("confirmPassword", {
            min: 8,
            required:
              "Confirm password must be at least 8 characters long",
            validate: (value, formValue) => value === formValue.new_password || 'Confirm password must be equal with password',
            
          })}
          error={errors.confirmPassword?.message}
        />
        {/* button reset */}
        <div className="pb-7 w-full">
          <Button
            className="w-full text-lg font-bold  bg-primary-600 hover:bg-primary-500"
            variant="secondary"
          >
            Reset
          </Button>
        </div>
      </form>
    </AuthCard>
  );
};

export default setpasswordpage;
