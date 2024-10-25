import { z } from "zod";

// Response
export const patchLoginRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const patchLoginResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const patchLoginSchema = {
  response: patchLoginResponseSchemaTransofrmed,
  request: patchLoginRequestSchemaTransformed,
};
