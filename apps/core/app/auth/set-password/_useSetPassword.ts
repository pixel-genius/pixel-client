import { PostForgetPasswordRequest } from "@repo/apis/core/forgot-password/post/post-forget-password.types";
import { UsePostForgetPassword } from "@repo/apis/core/forgot-password/post/use-post-forget-password";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useSetPassword = () => {
  const router = useRouter();
  const params = useSearchParams();
  const username = params.get("username");
  const form = useForm<
    PostForgetPasswordRequest & { confirmPassword?: string }
  >();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;
  const mutation = UsePostForgetPassword();
  const handleSubmitForm = handleSubmit(() => {
    setValue("username", username || "");
    const values = form.getValues();
    delete values.confirmPassword;
    mutation
      .mutateAsync(values)
      .then((res) => {
        toast.success(res.data.message);
        router.replace("/auth/login");
      })
      .catch((err) => {
        toast.error(err.response?.message || "Something went wrong");
      });
  });
  return {
    username,
    register,
    errors,
    setValue,
    handleSubmitForm,
  };
};

export default useSetPassword;
