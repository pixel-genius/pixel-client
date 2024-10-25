import { z } from "zod";

// Response
export const postForgetPasswordRequestSchemaTransformed = z
  .object({
    username: z.string(),
    otp: z.string(),
    new_password: z.string(),
  })
  .transform((data) => data);

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
