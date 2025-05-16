import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const postBecomeAutherRequestSchemaTransformed = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    profile_link: z.string(),
    info: z.string(),
    // TODO: Add cv file
    // cv: z.number(),
  })
  .transform((data) => data);

// Response
export const postBecomeAutherResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.object({
      keyPayload: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      profile_link: z.string(),
      info: z.string(),
      cv: z.number(),
    }),
  })
  .transform((data) => data);

export const postBecomeAutherSchema = {
  response: postBecomeAutherResponseSchemaTransofrmed,
  request: postBecomeAutherRequestSchemaTransformed,
};
