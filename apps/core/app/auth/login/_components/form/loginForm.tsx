"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginSchema } from "@repo/apis/core/accounts/login/post/post-login.schema";
import { PostLoginRequest } from "@repo/apis/core/accounts/login/post/post-login.types";
import { UsePostLogin } from "@repo/apis/core/accounts/login/post/use-post-login";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<PostLoginRequest>({
    resolver: zodResolver(postLoginSchema.request),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const loginMutation = UsePostLogin({
    onSuccess: (res) => {
      toast.success("Logged in successfully");
      setAuthTokens(res.data);

      setTimeout(() => {
        router.push("/");

        console.log("hiiiii");
        
      }, 1000);


      console.log("hiiiiiiiii");
      
    },
  });

  const handleSubmitForm = handleSubmit(() => {
    const values = form.getValues();
    loginMutation.mutate(values);
  });

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-2 flex flex-wrap gap-4">
        {/* Username and Email */}
        <Input
          label="User Name & Email"
          className="font-normal text-xs"
          placeholder="example@pixel.design "
          {...register("username")}
          error={errors.username?.message}
        />

        {/* Password */}
        <Input
          label="Password"
          type="password"
          placeholder="********"
          helperText={
            <a
              href="/auth/forget-password"
              className="block mb-3 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Forgot password?
            </a>
          }
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      {/* Button */}
      <Button
        size="lg"
        isLoading={loginMutation.isPending}
        type="submit"
        className="flex w-[100%] text-lg font-bold bg-primary-600 hover:bg-primary-500"
        variant="secondary"
      >
        Login
      </Button>
    </form>
  );
};

export { LoginForm };
