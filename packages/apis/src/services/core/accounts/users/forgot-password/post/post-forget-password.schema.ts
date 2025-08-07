import { z } from "zod";

// Response
export const postForgetPasswordRequestSchemaTransformed = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
});

// Request
export const postForgetPasswordResponseSchemaTransformed = z
  .object({
    message: z.string(),
  })
  .transform((data) => data);

export const postForgetPasswordSchema = {
  response: postForgetPasswordResponseSchemaTransformed,
  request: postForgetPasswordRequestSchemaTransformed,
};
