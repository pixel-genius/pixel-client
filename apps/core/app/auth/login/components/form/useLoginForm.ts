import { useState } from "react";
import { FormFieldState } from "./loginForm.types";
import { UsePostLogin } from "@repo/apis/core/accounts/login/post/use-post-login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { setAuthTokens } from "@repo/apis/utils/cookies";

const useLoginForm = () => {
  const router = useRouter();
  const [formField, setFormField] = useState<FormFieldState>({
    username: "",
    password: "",
  });
  const login = UsePostLogin();
  const handleChange = (e: any) => {
    setFormField((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    if (formField.username && formField.password) {
      login.mutateAsync(formField).then((res) => {
        toast.success("Logged in successfully");
        router.push("/");
        setAuthTokens(res.data);
      });
    } else toast.error("Please fill username and password!");
  };
  return {
    username: formField.username,
    password: formField.password,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
