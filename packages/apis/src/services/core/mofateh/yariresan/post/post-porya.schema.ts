import { z } from "zod";

export const postPoryaResponseSchema = z.object({
  keyBody: z.string(),
});

export const postPoryaResponseSchemaTransformed =
  postPoryaResponseSchema.transform((data) => data);

export const postPoryaRequestSchema = z.object({
  keyPayload: z.number(),
});

export const postPoryaRequestSchemaTransformed =
  postPoryaRequestSchema.transform((data) => data);

export const postPoryaSchema = {
  response: postPoryaResponseSchema,
  request: postPoryaRequestSchema,
  responseTransformed: postPoryaResponseSchemaTransformed,
  requestTransformed: postPoryaRequestSchemaTransformed,
};
