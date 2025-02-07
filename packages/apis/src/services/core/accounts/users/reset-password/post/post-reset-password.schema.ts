import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const postResetPasswordRequestSchemaTransformed = z
  .object({
    new_password: z.string(),
    confirm_password: z.string(),
    otp: z.string(),
    username: z.string(),
  })
  .transform((data) => data);

// Response
export const postResetPasswordResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.null(),
  })
  .transform((data) => data);

export const postResetPasswordSchema = {
  response: postResetPasswordResponseSchemaTransofrmed,
  request: postResetPasswordRequestSchemaTransformed,
};
