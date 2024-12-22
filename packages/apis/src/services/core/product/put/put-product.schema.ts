import { z } from "zod";

// Response
export const putProductRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putProductResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putProductSchema = {
  response: putProductResponseSchemaTransofrmed,
  request: putProductRequestSchemaTransformed,
};
