import { z } from "zod";

// request
export const postRegisterCompleteRequestSchemaTransformed = z
  .object({
    email: z.string(),
    otp:z.string(),
  })
  .transform((data) => data);

// response
export const postRegisterCompleteResponseSchemaTransofrmed = z
  .object({
    message: z.string().optional(),
    otp : z.array(z.string()).optional(),
  })
  .transform((data) => data);

export const postRegisterCompleteSchema = {
  response: postRegisterCompleteResponseSchemaTransofrmed,
  request: postRegisterCompleteRequestSchemaTransformed,
};
