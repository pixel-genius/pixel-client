import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Version
//  {
//   "notes": "sed adipisicing",
//   "name": "amet est dolore",
//   "blurb": "laborum ullamco",
//   "description": "ad mollit cupidatat consectetur",
//   "live_preview": "ex",
//   "embed": "fugiat",
//   "price": "quis et ex",
//   "discount": 169616574,
//   "product_tags": [
//     "sunt proident",
//     "qui aliquip"
//   ],
//   "file_formats": [
//     -48403128,
//     -49698579
//   ],
//   "images": [
//     -4092598,
//     53837497
//   ],
//   "previews": [
//     -2675608,
//     76569865
//   ],
//   "version": "anim aute culpa mollit",
//   "highlights": {},
//   "thumbnail": 679498,
//   "file": -60179890,
//   "active": true
// },
export const productsVersionSchema = z.object({
  notes: z.string().optional(),
  name: z.string().optional(),
  blurb: z.string().optional(),
  description: z.string().optional(),
  live_preview: z.string().optional(),
  embed: z.string().optional(),
  price: z.number().optional(),
  discount: z.number().nullable().optional(),
  product_tags: z.array(z.string()).optional(),
  file_formats: z.array(z.number()).optional(),
  images: z.array(z.number()).optional().nullable(),
  previews: z.array(z.number()).optional(),
  version: z.string().optional(),
  highlights: z.array(z.object({ value: z.string() })).optional(),
  thumbnail: z.number().optional(),
  file: z.number().optional(),
  active: z.boolean().optional().default(true),
});

// Request
export const postProductsRequestSchemaTransformed = z
  .object({
    is_published: z.boolean().optional().default(true),
    category: z.string().optional(),
    versions: z.array(productsVersionSchema),
  })
  .transform((data) => data);

// Response
export const postProductsResponseSchemaTransformed = apiResponseSchema
  .extend({
    data: z.object({
      keyBody: z.string(),
    }),
  })
  .transform((data) => data);

export const postProductsSchema = {
  response: postProductsResponseSchemaTransformed,
  request: postProductsRequestSchemaTransformed,
};
