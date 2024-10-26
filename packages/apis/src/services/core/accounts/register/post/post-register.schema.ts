import { z } from "zod";

// Response
export const postRegisterRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
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
