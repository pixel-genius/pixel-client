import { z } from "zod";

// Request
export const postForgetRequestSchemaTransformed = z
  .object({
    firstName: z.string(),
  })
  .transform((data) => ({ first_name: data.firstName }));

// Response
export const postForgetResponseSchemaTransformed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postForgetSchema = {
  response: postForgetResponseSchemaTransformed,
  request: postForgetRequestSchemaTransformed,
};
