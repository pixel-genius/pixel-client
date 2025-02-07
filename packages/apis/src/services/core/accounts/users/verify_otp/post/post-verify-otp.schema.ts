import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const postVerifyOtpRequestSchemaTransformed = z
  .object({
    otp: z.string(),
    username: z.string(),
  })
  .transform((data) => data);

// Response
export const postVerifyOtpResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.object({
      id: z.number(),
      username: z.string(),
      email: z.string(),
      is_active: z.boolean(),
      is_email_verified: z.boolean(),
      token: z.object({
        refresh: z.string(),
        access: z.string(),
      }),
    }),
  })
  .transform((data) => data);

export const postVerifyOtpSchema = {
  response: postVerifyOtpResponseSchemaTransofrmed,
  request: postVerifyOtpRequestSchemaTransformed,
};
