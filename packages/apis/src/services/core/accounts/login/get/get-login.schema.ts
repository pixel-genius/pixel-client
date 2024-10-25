import { z } from "zod";

// Response
export const getLoginRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const getLoginResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const getLoginSchema = {
  response: getLoginResponseSchemaTransofrmed,
  request: getLoginRequestSchemaTransformed,
};
