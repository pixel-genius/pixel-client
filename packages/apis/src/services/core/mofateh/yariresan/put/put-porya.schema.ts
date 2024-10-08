import { z } from "zod";

export const putPoryaResponseSchema = z.object({
  keyBody: z.string(),
});

export const putPoryaResponseSchemaTransformed =
  putPoryaResponseSchema.transform((data) => data);

export const putPoryaRequestSchema = z.object({
  keyPayload: z.number(),
});

export const putPoryaRequestSchemaTransformed =
  putPoryaRequestSchema.transform((data) => data);

export const putPoryaSchema = {
  response: putPoryaResponseSchema,
  request: putPoryaRequestSchema,
  responseTransformed: putPoryaResponseSchemaTransformed,
  requestTransformed: putPoryaRequestSchemaTransformed,
};
