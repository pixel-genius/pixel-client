import { z } from "zod";

export const patchPoryaResponseSchema = z.object({
  keyBody: z.string(),
});

export const patchPoryaResponseSchemaTransformed =
  patchPoryaResponseSchema.transform((data) => data);

export const patchPoryaRequestSchema = z.object({
  keyPayload: z.number(),
});

export const patchPoryaRequestSchemaTransformed =
  patchPoryaRequestSchema.transform((data) => data);

export const patchPoryaSchema = {
  response: patchPoryaResponseSchema,
  request: patchPoryaRequestSchema,
  responseTransformed: patchPoryaResponseSchemaTransformed,
  requestTransformed: patchPoryaRequestSchemaTransformed,
};
