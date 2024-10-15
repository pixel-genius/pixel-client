import { z } from "zod";

// Response
export const deleteLoginRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const deleteLoginResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const deleteLoginSchema = {
  response: deleteLoginResponseSchemaTransofrmed,
  request: deleteLoginRequestSchemaTransformed,
};
