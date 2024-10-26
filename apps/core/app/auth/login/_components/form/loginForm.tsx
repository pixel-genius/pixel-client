"use client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { register, errors, handleSubmitForm } = useLoginForm();
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-96 mb-2">
        <Input
          label="User Name & Email"
          className="font-normal text-xs"
          placeholder="example@pixel.design "
          {...register("username")}
          error={errors.username?.message}
        />
        <Input
          label="Password"
          type="password"
          placeholder="********"
          helperText={
            <a className="mt-4 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer">
              Forgot password?
            </a>
          }
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      {/* button */}
      <div>
        <Button
          type="submit"
          className="w-96 text-lg font-bold bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Log in
        </Button>
      </div>
    </form>
  );
};
export { LoginForm };
