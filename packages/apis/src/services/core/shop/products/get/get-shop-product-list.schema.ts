import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const getShopProductListRequestSchemaTransformed = z
  .object({
    page: z.number(),
    pageSize: z.number(),
  })
  .transform((data) => ({ ...data, page_size: data.pageSize }));

// Response
export const getShopProductListResponseSchemaTransformed = apiResponseSchema
  .extend({
    data: z.object({
      count: z.number(),
      next: z.string(),
      previous: z.string(),
      results: z.array(
        z.object({
          id: z.number(),
          is_published: z.boolean(),
          created_at: z.date(),
          created_by: z.object({
            username: z.string(),
            email: z.string(),
          }),
          versions: z.array(
            z.object({
              id: z.number(),
              version: z.string(),
              notes: z.string(),
              name: z.string(),
              blurb: z.string(),
              description: z.string(),
              live_preview: z.string(),
              embed: z.string(),
              price: z.number().nullable().optional(),
              highlights: z.object({}),
              discount: z.number().nullable().optional(),
              tags: z.array(
                z.object({
                  id: z.number(),
                  title: z.string(),
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
            }),
          ),
        }),
      ),
    }),
  })
  .transform((data) => data);

export const getShopProductListSchema = {
  response: getShopProductListResponseSchemaTransformed,
  request: getShopProductListRequestSchemaTransformed,
};
