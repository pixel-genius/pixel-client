import { z } from "zod";

export const postLoginRequestSchemaTransformed = z
  .object({
    username: z.string(),
    password: z.string(),
    otp: z.string().optional(),
  })
  .transform((data) => ({ tokentest: data.username + data.password }));

export const postLoginResponseSchemaTransofrmed = z
  .object({
    refresh: z.string(),
    access: z.string(),
  })
  .transform((data) => data);

export const postLoginSchema = {
  response: postLoginResponseSchemaTransofrmed,
  request: postLoginRequestSchemaTransformed,
};
