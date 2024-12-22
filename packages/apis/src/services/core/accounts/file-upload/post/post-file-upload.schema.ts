import { z } from "zod";

// Response
export const postFileUploadRequestSchemaTransformed = z
  .object({
    fileCategory: z.string(),
    file: z.array(z.instanceof(File)),
  })
  .transform((data) => {
    const form = new FormData();
    form.append("fileCategory", data.fileCategory);
    data.file.forEach((file) => {
      form.append("file", file);
    });
    return form;
  });

// Request
export const postFileUploadResponseSchemaTransofrmed = z
  .object({
    message: z.string().optional(),
    error: z.string().optional(),
    ids: z.array(z.number()).optional(),
  })
  .transform((data) => data);

export const postFileUploadSchema = {
  response: postFileUploadResponseSchemaTransofrmed,
  request: postFileUploadRequestSchemaTransformed,
};
