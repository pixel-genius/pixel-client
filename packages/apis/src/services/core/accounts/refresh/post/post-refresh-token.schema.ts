import { z } from "zod";

// Request
export const postRefreshTokenRequestSchemaTransformed = z
  .object({
    refresh: z.string(),
  })
  .transform((data) => data);

// Response
export const postRefreshTokenResponseSchemaTransformed = z
  .object({
    access: z.string(),
  })
  .transform((data) => data);

export const postRefreshTokenSchema = {
  response: postRefreshTokenResponseSchemaTransformed,
  request: postRefreshTokenRequestSchemaTransformed,
};
