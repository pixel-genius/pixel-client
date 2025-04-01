import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

export const postLoginRequestSchemaTransformed = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .transform((data) => ({...data , name: data.username }));

export const postLoginResponseSchemaTransofrmed = apiResponseSchema
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

export const postLoginSchema = {
  response: postLoginResponseSchemaTransofrmed,
  request: postLoginRequestSchemaTransformed,
};
