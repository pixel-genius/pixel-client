import { z } from "zod";

export const deletePoryaResponseSchema = z.object({
  keyBody: z.string(),
});

export const deletePoryaResponseSchemaTransformed =
  deletePoryaResponseSchema.transform((data) => data);

export const deletePoryaRequestSchema = z.object({
  keyPayload: z.number(),
});

export const deletePoryaRequestSchemaTransformed =
  deletePoryaRequestSchema.transform((data) => data);

export const deletePoryaSchema = {
  response: deletePoryaResponseSchema,
  request: deletePoryaRequestSchema,
  responseTransformed: deletePoryaResponseSchemaTransformed,
  requestTransformed: deletePoryaRequestSchemaTransformed,
};
