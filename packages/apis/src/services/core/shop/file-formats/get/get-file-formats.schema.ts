import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const getFileFormatsRequestSchemaTransformed = z
  .undefined()
  .transform((data) => data);

// Response
export const getFileFormatsResponseSchemaTransformed = apiResponseSchema
  .extend({
    data: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        icon: z.string(),
      }),
    ),
  })
  .transform((data) => data);

export const getFileFormatsSchema = {
  response: getFileFormatsResponseSchemaTransformed,
  request: getFileFormatsRequestSchemaTransformed,
};
