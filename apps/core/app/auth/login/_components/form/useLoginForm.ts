import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginSchema } from "@repo/apis/core/accounts/login/post/post-login.schema";
import { PostLoginRequest } from "@repo/apis/core/accounts/login/post/post-login.types";
import { UsePostLogin } from "@repo/apis/core/accounts/login/post/use-post-login";
import { setAuthTokens } from "@repo/apis/utils/cookies";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useLoginForm = () => {
  const router = useRouter();
  const form = useForm<PostLoginRequest>({
    resolver: zodResolver(postLoginSchema.request),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const login = UsePostLogin();
  const handleSubmitForm = handleSubmit(() => {
    const values = form.getValues();
    if (values.username && values.password) {
      login.mutateAsync(values).then((res) => {
        toast.success("Logged in successfully");
        router.push("/");
        setAuthTokens(res.data);
      });
    }
  });

  return {
    handleSubmitForm,
    register,
    errors,
  };
};

export default useLoginForm;
