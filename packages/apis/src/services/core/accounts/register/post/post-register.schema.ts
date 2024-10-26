import { z } from "zod";

// Response
export const postRegisterRequestSchemaTransformed = z
.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
})
.refine((val) => val.password === val.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})
  .transform((data) => data);

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
