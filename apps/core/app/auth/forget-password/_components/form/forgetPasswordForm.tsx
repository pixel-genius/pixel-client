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
  const mutation = UsePostForgetPassword();
  const handleSubmitForm = handleSubmit(
    (data: { username: PostForgetPasswordRequest["username"] }) => {
      mutation.mutateAsync(data).then((res) => {
        const values = form.getValues();
        toast.info(res.data.message);
        router.push(`/auth/set-password?username=${values.username}`);
      });
    },
  );

  return (
    <form onSubmit={handleSubmitForm} className="w-full pb-7">
      <Input
        label="Username"
        className="font-normal text-xs"
        placeholder="genius@exanpel.com"
        {...register("username")}
        error={errors.username?.message}
      />
      <Button
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
