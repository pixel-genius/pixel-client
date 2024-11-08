import { z } from "zod";

// Response
export const postForgetPasswordRequestSchemaTransformed = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    otp: z.string().optional(),
    newPassword: z
      .string()
      .min(8, "New Password must be at least 8 characters long")
      .optional(),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long")
      .optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .transform((data) => {
    delete data.confirmPassword;
    delete data.newPassword;

    return { ...data, new_password: data.newPassword };
  });

// Request
export const postForgetPasswordResponseSchemaTransofrmed = z
  .object({
    message: z.string(),
  })
  .transform((data) => data);

export const postForgetPasswordSchema = {
  response: postForgetPasswordResponseSchemaTransofrmed,
  request: postForgetPasswordRequestSchemaTransformed,
};
