"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginSchema } from "@repo/apis/core/accounts/users/login/post/post-login.schema";
import type { PostLoginRequest } from "@repo/apis/core/accounts/users/login/post/post-login.types";
import { usePostLogin } from "@repo/apis/core/accounts/users/login/post/use-post-login";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { Button } from "@repo/ui/components/button";
import { PasswordInput } from "@repo/ui/components/passwordInput";
import { Input } from "@repo/ui/components/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
      toast.success("Logged in successfully");
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

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <div className="mb-2 flex flex-wrap gap-4">
        {/* Username and Email */}
        <Input
          label="User Name & Email"
          className="font-normal text-xs w-full"
          placeholder="example@pixel.design "
          {...register("username")}
          error={errors.username?.message}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          className="w-full font-normal text-xs"
          helperText={
            <Link
              href="/auth/forget-password"
              className="block mb-3 text-sm font-light text-muted-foreground hover:text-muted cursor-pointer"
            >
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
