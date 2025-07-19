import { z } from "zod";

// Request
export const postForgetRequestSchemaTransformed = z
  .object({
    firstName: z.string(),
  })
  .transform((data) => ({ first_name: data.firstName }));

// Response
export const postForgetResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postForgetSchema = {
  response: postForgetResponseSchemaTransofrmed,
  request: postForgetRequestSchemaTransformed,
};
