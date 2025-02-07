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
import { zodResolver } from "@hookform/resolvers/zod";
import { Countdown } from "@repo/ui/components/countdown";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { usePostVerifyOtp } from "@repo/apis/core/accounts/users/verify_otp/post/use-post-verify-otp";
import { postVerifyOtpSchema } from "@repo/apis/core/accounts/users/verify_otp/post/post-verify-otp.schema";
import type { PostVerifyOtpRequest } from "@repo/apis/core/accounts/users/verify_otp/post/post-verify-otp.types";
import { setAuthTokens } from "@repo/apis/utils/cookies";

export interface SignupOtpFormProps {
  username: string | undefined;
}
export const SignupOtpForm = (props: SignupOtpFormProps) => {
  const { username } = props;

  const form = useForm<PostVerifyOtpRequest>({
    resolver: zodResolver(postVerifyOtpSchema.request),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  const router = useRouter();

  const mutation = usePostVerifyOtp({
    onSuccess: (res) => {
      toast.success("Registered successfully, Welcome to Pixel Genius!");
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

  const otpRegister = register("otp");

  return (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          name={otpRegister.name}
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
      <div className="pb-7 w-full">
        <Button
          className="w-full text-lg font-bold  bg-primary-600 hover:bg-primary-500"
          variant="secondary"
          isLoading={mutation.isPending}
        >
          Verify
        </Button>
      </div>
      <div className="pb-7">
        <p>
          didnt recieveddqqdqdqdqdqdqdqdqdq code yet? <Countdown date={Date.now() + 120000} />
        </p>
      </div>
    </form>
  );
};
