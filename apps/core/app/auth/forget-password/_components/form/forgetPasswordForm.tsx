"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { postForgetPasswordSchema } from "@repo/apis/core/accounts/users/forgot-password/post/post-forget-password.schema";
import type { PostForgetPasswordRequest } from "@repo/apis/core/accounts/users/forgot-password/post/post-forget-password.types";
import { UsePostForgetPassword } from "@repo/apis/core/accounts/users/forgot-password/post/use-post-forget-password";
import { Button } from "@repo/ui/components/atoms/button";
import { Input } from "@repo/ui/components/molecules/input";

const ForgetPasswordForm = () => {
  const router = useRouter();

  const form = useForm<PostForgetPasswordRequest>({
    resolver: zodResolver(postForgetPasswordSchema.request),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const mutation = UsePostForgetPassword({
    onSuccess: (res, context) => {
      toast.info(res.data.message);
      router.replace(`/auth/set-password?username=${context.username}`);
    },
    onError: (err) => {
      toast.error(err.response?.data.message ?? "Something went wrong");
    },
  });

  const onSubmit = (data: PostForgetPasswordRequest) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    router.prefetch("/auth/set-password");
  }, [router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full pb-7">
      <Input
        label="Username"
        className="font-normal text-xs"
        placeholder="Enter your username"
        autoFocus
        {...register("username")}
        error={errors.username?.message}
      />

      <Button
        isLoading={mutation.isPending}
        type="submit"
        className="w-full mt-5 text-sm font-normal bg-primary text-foreground"
        variant="primary"
      >
        Reset
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
