"use client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { username, password, handleChange, handleSubmit } = useLoginForm();
  return (
    <>
      <div className="w-96 mb-2">
        <Label className="text-sm font-medium">User Name & Email</Label>
        <Input
          name="username"
          value={username}
          className="font-normal text-xs"
          placeholder="example@pixel.design "
          onChange={handleChange}
        />
        <Label className="text-sm font-medium"> password</Label>
        <Input
          name="password"
          type="password"
          value={password}
          placeholder="********"
          helperText={
            <a className="mt-4 text-sm font-light text-gray-500 hover:text-gray-700 cursor-pointer">
              Forgot password?
            </a>
          }
          onChange={handleChange}
        />
      </div>
      {/* button */}
      <div>
        <Button
          onClick={handleSubmit}
          className="w-96 text-lg font-bold bg-primary-600 hover:bg-primary-500"
          variant="secondary"
        >
          Log in
        </Button>
      </div>
    </>
  );
};
export { LoginForm };
