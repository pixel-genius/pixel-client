import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const getProductVersionListRequestSchemaTransformed = z
  .object({
    page: z.number().min(1).optional(),
    pageSize: z.number().min(1).optional(),
  })
  .transform((data) => data);

// Response
export const getProductVersionListResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.union([
      z.array(
        z.object({
          id: z.number(),
          version: z.string(),
          notes: z.string(),
          name: z.string(),
          blurb: z.string(),
          description: z.string(),
          live_preview: z.string(),
          embed: z.string(),
          price: z.string(),
          final_price: z.string(),
          highlights: z.any(),
          discount: z.number(),
          product_tags: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
            }),
          ),
          file_formats: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              icon: z.string(),
            }),
          ),
          images: z.array(
            z.object({
              id: z.number(),
              file: z.string(),
              extension: z.string(),
              mimetype: z.string(),
              created_at: z.string(),
            }),
          ),
          previews: z.array(
            z.object({
              id: z.number(),
              file: z.string(),
              extension: z.string(),
              mimetype: z.string(),
              created_at: z.string(),
            }),
          ),
          thumbnail: z.object({
            id: z.number(),
            file: z.string(),
            extension: z.string(),
            mimetype: z.string(),
            created_at: z.string(),
          }),
          file: z.object({
            id: z.number(),
            file: z.string(),
            extension: z.string(),
            mimetype: z.string(),
            created_at: z.string(),
          }),
          active: z.boolean(),
          like_count: z.number(),
          is_liked: z.string(),
        }),
      ),
      z.null(),
    ]),
  })
  .transform((data) => ({
    ...data,
    data: data.data || [],
  }));

export const getProductVersionListSchema = {
  response: getProductVersionListResponseSchemaTransofrmed,
  request: getProductVersionListRequestSchemaTransformed,
};
