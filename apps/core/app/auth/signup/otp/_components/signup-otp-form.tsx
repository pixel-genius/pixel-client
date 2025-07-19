// import components
"use client";

// import icons
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { postVerifyOtpSchema } from "@repo/apis/core/accounts/users/verify_otp/post/post-verify-otp.schema";
import type { PostVerifyOtpRequest } from "@repo/apis/core/accounts/users/verify_otp/post/post-verify-otp.types";
import { usePostVerifyOtp } from "@repo/apis/core/accounts/users/verify_otp/post/use-post-verify-otp";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { Countdown } from "@repo/ui/components/atoms/countdown";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@repo/ui/components/atoms/input-otp";
import { PasteOtpButton } from "@repo/ui/components/molecules/paste-otp-button";
import { useClipboardOtp } from "@repo/ui/hooks/use-clipboard-otp";

// import components

// import components

// import components

// import components

// import components

// import components

// import components

// import components

export interface SignupOtpFormProps {
  username: string | undefined;
}
export const SignupOtpForm = (props: SignupOtpFormProps) => {
  const { username } = props;

  // Use reusable clipboard OTP hook
  const { extractedOtp } = useClipboardOtp({
    otpLength: 6,
    pattern: REGEXP_ONLY_DIGITS,
  });

  const form = useForm<PostVerifyOtpRequest>({
    resolver: zodResolver(postVerifyOtpSchema.request),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = form;

  const otpValue = watch("otp");

  const router = useRouter();

  const mutation = usePostVerifyOtp({
    onSuccess: (res) => {
      toast.success(`Hello @${res.data.data.username}! Welcome to Pixel 🎉`);
      setAuthTokens(res.data.data.token);
      router.push("/");
    },

    onError: (err) => {
      toast.error(err.response?.data.message ?? "Something went wrong");
    },
  });

  const handleSubmitForm = (data: PostVerifyOtpRequest) => {
    if (username) mutation.mutate({ ...data, username });
    else toast.error("username is required");
  };

  const handlePasteOtp = (otp: string) => {
    setValue("otp", otp);
    // Auto submit after pasting valid OTP
    const data = getValues();
    handleSubmitForm(data);
  };

  const otpRegister = register("otp");

  return (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="w-full flex flex-col items-center gap-4">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          name={otpRegister.name}
          value={otpValue}
          onChange={(value: string) => {
            setValue("otp", value);

            if (value.length === 6) {
              const data = getValues();
              handleSubmitForm(data);
            }
          }}
          autoFocus
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

      {/* button */}
      <div className="pb-4 w-full flex justify-center">
        <PasteOtpButton
          extractedOtp={extractedOtp}
          onPaste={handlePasteOtp}
          isLoading={mutation.isPending}
          variant="primary"
          className="w-full"
        />
      </div>

      <div className="pb-7">
        <p>
          Didn't receive the code yet? <Countdown date={Date.now() + 120000} />
        </p>
      </div>
    </form>
  );
};
