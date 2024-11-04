// import components
"use client";
import { PostForgetPasswordRequest } from "@repo/apis/core/forgot-password/post/post-forget-password.types";
import { UsePostForgetPassword } from "@repo/apis/core/forgot-password/post/use-post-forget-password";
import { Button } from "@repo/ui/components/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@repo/ui/components/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// import icons
import { Input } from "@repo/ui/components/input";
import AuthCard from "../_components/auth-card";
import { postForgetPasswordSchema } from "@repo/apis/core/forgot-password/post/post-forget-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const setpasswordpage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const username = params.get("username");

  if (!username) router.replace("/auth/forget-password");

  const form = useForm<PostForgetPasswordRequest>({
    resolver: zodResolver(postForgetPasswordSchema.request),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  useEffect(() => {
    setValue("username", username as string);
  }, []);

  const mutation = UsePostForgetPassword({
    onSuccess: (res, context) => {
      toast.info(res.data.message);
      router.push(`/auth/login`);
    },

    onError: (err) => {
      console.log(err);
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });

  const handleSubmitForm = (data: PostForgetPasswordRequest) => {
    mutation.mutate(data);
  };

  const otpRegister = register("otp");

  return (
    <AuthCard>
      {/* logo */}
      <div className="pt-7 flex flex-col items-center gap-4">
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
        onSubmit={handleSubmit(handleSubmitForm)}
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
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <Input
          label="Confirm Password"
          className="font-normal text-xs text-gray-500"
          placeholder="********"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        {/* button reset */}
        <div className="pb-7 w-full">
          <Button
            isLoading={mutation.isPending}
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
