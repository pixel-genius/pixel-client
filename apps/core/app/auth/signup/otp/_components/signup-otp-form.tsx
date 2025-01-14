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
import { postRegisterCompleteSchema } from "@repo/apis/core/accounts/register/complete/post/post-register-complete.schema";
import { PostRegisterCompleteRequest } from "@repo/apis/core/accounts/register/complete/post/post-register-complete.types";
import { UsePostRegisterComplete } from "@repo/apis/core/accounts/register/complete/post/use-post-register-complete";
import { Countdown } from "@repo/ui/components/countdown";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export interface SignupOtpFormProps {
  email: string;
}
export const SignupOtpForm = (props: SignupOtpFormProps) => {
  const { email } = props;

  const form = useForm<PostRegisterCompleteRequest>({
    resolver: zodResolver(postRegisterCompleteSchema.request),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (email) setValue("email", email);
  }, [email]);

  const router = useRouter();

  const muutation = UsePostRegisterComplete({
    onSuccess: (res) => {
      toast.info(res.data.message);
      router.push(`/auth/login`);
    },

    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });

  const handleSubmitForm = (data: PostRegisterCompleteRequest) => {
    muutation.mutate(data);
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
          variant="primary"
          isLoading={muutation.isPending}
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
