import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const getProductVersionsRequestSchemaTransformed = z
  .object({
    productId: z.string(),
  })
  .transform((data) => ({
    product_id: data.productId,
  }));

// Response
export const getProductVersionsResponseSchemaTransofrmed = apiResponseSchema.extend({
  data: z.array(z.object({
    version: z.string(),
    id: z.number(),
  })),
}).transform((data) => data);

export const getProductVersionsSchema = {
  response: getProductVersionsResponseSchemaTransofrmed,
  request: getProductVersionsRequestSchemaTransformed,
};
