import { z } from "zod";

// Response
export const putLoginRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putLoginResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putLoginSchema = {
  response: putLoginResponseSchemaTransofrmed,
  request: putLoginRequestSchemaTransformed,
};
