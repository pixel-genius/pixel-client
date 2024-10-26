"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { postRegisterSchema } from "@repo/apis/core/accounts/register/post/post-register.schema";
import { PostRegisterRequest } from "@repo/apis/core/accounts/register/post/post-register.types";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

// import icons
import { UsePostRegister } from "@repo/apis/core/accounts/register/post/use-post-register";
import { useRouter } from "next/navigation";
import path from "path";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import GoogleIcon from "../../../../../packages/icons/src/components/google";
import LinkedinIcon from "../../../../../packages/icons/src/components/linkedin";
import AuthCard from "../_components/auth-card";

const SignUpPage = () => {
  const router = useRouter();
  const form = useForm<PostRegisterRequest>({
    resolver: zodResolver(postRegisterSchema.request),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const mutation = UsePostRegister({
    onSuccess: (data , context) => {
      console.log("200: data" , data);

      const URL = path.join("/auth/otp" , "?" , "email=" , context.email);
      router.push(URL);
      
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
        <p className="text-2xl font-bold">Create new account</p>
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
          size="lg"
          className="w-full text-lg font-bold bg-primary-600 hover:bg-primary-500 mt-2"
          variant="secondary"
          type="submit"
          isLoading={mutation.isPending}
        >
          Sign Up
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center w-full gap-3 my-4">
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
        <p className="text-base font-medium">OR</p>
        <div className="w-full h-[1px] bg-gray-700 rounded-full"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="flex w-full flex-col items-center gap-3">
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
      </div>

      {/* Footer */}
      <div className="flex gap-2 pb-4 text-sm">
        <p>Already have an account?</p>
        <a className="underline cursor-pointer">Log in</a>
      </div>
    </AuthCard>
  );
};

export default SignUpPage;
