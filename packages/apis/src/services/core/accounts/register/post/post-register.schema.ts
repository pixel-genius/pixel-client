import { z } from "zod";

// Response

// Schema when only OTP is provided, requiring only email
const otpSchema = z.object({
  email: z.string().email("Invalid email format"),
  otp: z.string(),
  username: z.string().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
});

// Full registration schema without OTP
const fullRegistrationSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Combine the schemas conditionally
export const postRegisterRequestSchemaTransformed = z.union([otpSchema, fullRegistrationSchema]);

// Request
export const postRegisterResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postRegisterSchema = {
  response: postRegisterResponseSchemaTransofrmed,
  request: postRegisterRequestSchemaTransformed,
};
