import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Response
export const postUploadfileRequestSchemaTransformed = z
  .object({
    file: z.array(typeof File !== "undefined" ? z.instanceof(File) : z.any()),
  })
  .transform((data) => {
    const form = new FormData();
    data.file.forEach((file) => {
      form.append("file", file);
    });
    return form;
  });

// Request
export const postUploadfileResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.array(
      z.object({
        id: z.number(),
        file: z.string(),
        extension: z.string(),
        mimetype: z.string(),
        created_at: z.string(),
      }),
    ),
  })
  .transform((data) => data);

export const postUploadfileSchema = {
  response: postUploadfileResponseSchemaTransofrmed,
  request: postUploadfileRequestSchemaTransformed,
};
