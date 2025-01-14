"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { postRegisterSchema } from "@repo/apis/core/accounts/register/post/post-register.schema";
import { PostRegisterRequest } from "@repo/apis/core/accounts/register/post/post-register.types";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

// import icons
import { UsePostRegister } from "@repo/apis/core/accounts/register/post/use-post-register";
import { useQueryParams } from "@repo/ui/hooks/use-query-params";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AuthCard from "../_components/auth-card";

const SignUpPageComponent = () => {
  const router = useRouter();
  const form = useForm<PostRegisterRequest>({
    resolver: zodResolver(postRegisterSchema.request),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { createQueryStringFromObject } = useQueryParams();

  const mutation = UsePostRegister({
    onSuccess: (data, context) => {
      console.log("200: data", data);

      router.push(
        "/auth/signup/otp" +
          "?" +
          createQueryStringFromObject({ email: context.email }),
      );

      toast.success("Send OTP");
    },
  });

  const onSubmit = (data: PostRegisterRequest) => {
    console.log("Sign Up Data:", data);
    mutation.mutate(data);
  };

  return (
    <AuthCard>
      {/* Title */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-bold">Sign Up and Get Started</p>
          <p className="text-sm font-normal">
            It only takes a few seconds to join us and start exploring.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2"
      >
        <Input
          label="Username"
          placeholder="pixel.design"
          {...register("username")}
          error={errors.username?.message}
        />

        <Input
          label="Email"
          placeholder="example@pixel.design"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          label="Password"
          placeholder="********"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="********"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        {/* Submit Button */}
        <Button
          size="md"
          className="w-full text-md font-normal bg-primary-600 hover:bg-primary-500 mt-2"
          variant="primary"
          type="submit"
          isLoading={mutation.isPending}
        >
          Sign Up
        </Button>
      </form>

      {/* Divider */}
      {/* <div className="flex items-center w-full gap-3 my-4">
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
        <p className="text-base font-medium">OR</p>
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
      </div> */}

      {/* Social Login Buttons */}
      {/* <div className="flex w-full flex-col items-center gap-3">
        <Button
          size="lg"
          className="w-full text-lg bg-[#181818]"
          variant="secondary"
        >
          <GoogleIcon size={24} className="mr-2" />
          Log in with Google
        </Button>
        <Button
          size="lg"
          className="w-full text-lg bg-[#181818]"
          variant="secondary"
        >
          <LinkedinIcon size={24} className="mr-2" />
          Log in with LinkedIn
        </Button>
      </div> */}

      {/* Footer */}
      <div className="flex gap-2 pb-4 text-sm">
        <p>Already have an account?</p>
        <Link href="/auth/login" className="underline cursor-pointer">
          Log in
        </Link>
      </div>
    </AuthCard>
  );
};

const SignUpPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpPageComponent />
    </Suspense>
  );
};

export default SignUpPage;
