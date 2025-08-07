import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const getTagsRequestSchemaTransformed = z
  .undefined()
  .transform((data) => data);

// Response
export const getTagsResponseSchemaTransformed = apiResponseSchema
  .extend({
    data: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    ),
  })
  .transform((data) => data);

export const getTagsSchema = {
  response: getTagsResponseSchemaTransformed,
  request: getTagsRequestSchemaTransformed,
};
