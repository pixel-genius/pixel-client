// import components
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";

import { Suspense, useEffect } from "react";

import { useForm } from "react-hook-form";

import { useRouter, useSearchParams } from "next/navigation";

import type { PostResetPasswordRequest } from "@repo/apis/core/accounts/users/reset-password/post/post-reset-password.types";
import { postResetPasswordSchema } from "@repo/apis/core/accounts/users/reset-password/post/post-reset-password.schema";
import { usePostResetPassword } from "@repo/apis/core/accounts/users/reset-password/post/use-post-reset-password";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@repo/ui/components/atoms/input-otp";
import { PasteOtpButton } from "@repo/ui/components/molecules/paste-otp-button";
import { PasswordInput } from "@repo/ui/components/molecules/passwordInput";
import { useClipboardOtp } from "@repo/ui/hooks/use-clipboard-otp";
import { Button } from "@repo/ui/components/atoms/button";

import AuthCard from "../_components/auth-card";

// import components

const SetPasswordPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const username = params.get("username");

  if (!username) router.replace("/auth/forget-password");

  // Use reusable clipboard OTP hook
  const { extractedOtp } = useClipboardOtp({
    otpLength: 6,
    pattern: REGEXP_ONLY_DIGITS,
  });

  const form = useForm<PostResetPasswordRequest>({
    resolver: zodResolver(postResetPasswordSchema.request),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const otp = watch("otp");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setValue("username", username as string);
  }, [username]);

  const mutation = usePostResetPassword({
    onSuccess: (res) => {
      toast.info(res.data.message);
      router.push("/auth/login");
    },

    onError: (err) => {
      toast.error(err.response?.data.message ?? "Something went wrong");
    },
  });

  const handleSubmitForm = (data: PostResetPasswordRequest) => {
    mutation.mutate(data);
  };

  const handlePasteOtp = (otp: string) => {
    setValue("otp", otp);
  };

  const otpRegister = register("otp");

  return (
    <AuthCard>
      {/* logo */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Set your Password</p>
          <p className="text-center text-sm font-normal">
            We've sent the code to{" "}
            <span className="underline text-sm font-normal">{username}</span>
          </p>
          <p className="text-sm font-normal">check your email</p>
        </div>
      </div>
      {/* otp input */}
      <form
        className="w-full flex flex-col items-center gap-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            name={otpRegister.name}
            onChange={(value: string) => {
              setValue("otp", value);
            }}
            value={otp}
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
        </div>

        <PasteOtpButton
          extractedOtp={extractedOtp}
          onPaste={handlePasteOtp}
          isLoading={mutation.isPending}
          variant="secondary"
          className="w-full mb-2"
        />

        {/* input */}
        <PasswordInput
          label="Password"
          type="password"
          className="font-normal text-xs text-muted-foreground"
          placeholder="********"
          {...register("new_password")}
          error={errors.new_password?.message}
        />
        <PasswordInput
          label="Confirm Password"
          className="font-normal text-xs text-muted-foreground"
          placeholder="********"
          {...register("confirm_password")}
          error={errors.confirm_password?.message}
        />
        {/* button reset */}
        <div className="pb-7 w-full">
          <Button
            className="w-full"
            isLoading={mutation.isPending}
            variant="primary"
          >
            Reset
          </Button>
        </div>
      </form>
    </AuthCard>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetPasswordPage />
    </Suspense>
  );
};

export default Page;
