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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// import icons
import { zodResolver } from "@hookform/resolvers/zod";
import { postForgetPasswordSchema } from "@repo/apis/core/forgot-password/post/post-forget-password.schema";
import { Input } from "@repo/ui/components/input";
import { Suspense, useEffect } from "react";
import AuthCard from "../_components/auth-card";

const Setpasswordpage = () => {
  const router = useRouter();
  // TODO: Fix this
  // const params = useSearchParams();
  // const username = params.get("username");

  const username = "test@gmail.com";

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
    onSuccess: (res) => {
      toast.info(res.data.message);
      router.push(`/auth/login`);
    },

    onError: (err) => {
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
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Set your Password</p>
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
      <form
        className="w-full flex flex-col items-center "
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="pb-4">
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
        </div>

        {/* input */}
        <div className="w-full flex flex-col gap-5">
          <Input
            label="Password"
            type="password"
            className="font-normal text-xs text-gray-500"
            placeholder="********"
            {...register("newPassword")}
            error={errors.newPassword?.message}
          />
          <Input
            label="Confirm Password"
            type="password"
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
              variant="primary"
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Setpasswordpage />
    </Suspense>
  );
};

export default Page;
