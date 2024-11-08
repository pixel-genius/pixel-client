"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { postForgetPasswordSchema } from "@repo/apis/core/forgot-password/post/post-forget-password.schema";
import { PostForgetPasswordRequest } from "@repo/apis/core/forgot-password/post/post-forget-password.types";
import { UsePostForgetPassword } from "@repo/apis/core/forgot-password/post/use-post-forget-password";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

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
      router.push(`/auth/set-password?username=${context.username}`);
    },
  });

  const onSubmit = (data: PostForgetPasswordRequest) => {
    console.log("Sign Up Data:", data);
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full pb-7">
      <Input
        label="Username"
        className="font-normal text-xs"
        placeholder="genius@exanpel.com"
        {...register("username")}
        error={errors.username?.message}
      />

      <Button
        isLoading={mutation.isPending}
        type="submit"
        className="w-full mt-5 text-lg font-normal bg-primary-600 hover:bg-primary-500"
        variant="secondary"
      >
        Reset
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
