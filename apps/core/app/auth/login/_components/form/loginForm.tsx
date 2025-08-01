"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import Link from "next/link";

import type { PostLoginRequest } from "@repo/apis/core/accounts/users/login/post/post-login.types";
import { postLoginSchema } from "@repo/apis/core/accounts/users/login/post/post-login.schema";
import { usePostLogin } from "@repo/apis/core/accounts/users/login/post/use-post-login";
import { PasswordInput } from "@repo/ui/components/molecules/passwordInput";
import { Input } from "@repo/ui/components/molecules/input";
import { Button } from "@repo/ui/components/atoms/button";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<PostLoginRequest>({
    resolver: zodResolver(postLoginSchema.request),
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const loginMutation = usePostLogin({
    onSuccess: (res) => {
      if (res.data.data.is_email_verified) {
        toast.success(
          `Hello @${res.data.data.username}! Welcome back to Pixel 🎉`,
        );
        setAuthTokens(res.data.data.token);
        router.push("/");
      } else {
        toast.warning(
          "Please verify your email to continue. We've sent you a verification email.",
        );
        router.push(
          `/auth/signup/otp?email=${res.data.data.email}&username=${res.data.data.username}`,
        );
      }
    },
    onError: (res) => {
      toast.error(res.response?.data.message ?? "Something went wrong");
    },
  });

  const data = loginMutation.data?.data;
  console.log("data", data);
  const handleSubmitForm = handleSubmit(async (values) => {
    console.log("values", values);
    try {
      const res = await signIn("credentials", {
        email: values.username,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong during login");
    }
  });

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/auth/forget-password");
    router.prefetch("/auth/signup");
    router.prefetch("/auth/signup/otp");
  }, [router]);

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <div className="mb-2 flex flex-wrap gap-4">
        {/* Username and Email */}
        <Input
          label="Username or Email"
          className="font-normal text-xs w-full"
          placeholder="Enter your username or email"
          autoFocus
          {...register("username")}
          error={errors.username?.message}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          className="w-full font-normal text-md"
          placeholder="********"
          helperText={
            <Link href="/auth/forget-password" className="underline">
              Forgot password?
            </Link>
          }
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      {/* Button */}
      <Button
        size="md"
        isLoading={loginMutation.isPending}
        type="submit"
        className="flex w-[100%] text-base font-normal bg-primary text-foreground "
        variant="primary"
      >
        Login
      </Button>
    </form>
  );
};

export { LoginForm };
