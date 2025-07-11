"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginSchema } from "@repo/apis/core/accounts/users/login/post/post-login.schema";
import type { PostLoginRequest } from "@repo/apis/core/accounts/users/login/post/post-login.types";
import { usePostLogin } from "@repo/apis/core/accounts/users/login/post/use-post-login";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { Button, PasswordInput, Input } from "@repo/ui/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
      toast.success(
        `Hello @${res.data.data.username}! Welcome back to Pixel 🎉`,
      );
      setAuthTokens(res.data.data.token);
      router.push("/");
    },
    onError: (res) => {
      toast.error(res.response?.data.message ?? "Something went wrong");
    },
  });

  const handleSubmitForm = handleSubmit(() => {
    const values = form.getValues();
    loginMutation.mutate(values);
  });

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/auth/forget-password");
    router.prefetch("/auth/signup");
  }, [router]);

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <div className="mb-2 flex flex-wrap gap-4">
        {/* Username and Email */}
        <Input
          label="User Name & Email"
          className="font-normal text-xs w-full"
          placeholder="example@pixel.design "
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
