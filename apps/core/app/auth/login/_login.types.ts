import { SignInOptions } from "next-auth/react";

export interface FormData {
  username: string;
  password: string;
  otp?: string;
}
