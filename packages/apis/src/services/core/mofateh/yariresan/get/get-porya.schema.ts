import { z } from "zod";

export const getPoryaResponseSchema = z.object({
  keyBody: z.string(),
});

export const getPoryaResponseSchemaTransformed =
  getPoryaResponseSchema.transform((data) => data);

export const getPoryaRequestSchema = z.object({
  keyPayload: z.number(),
});

export const getPoryaRequestSchemaTransformed =
  getPoryaRequestSchema.transform((data) => data);

export const getPoryaSchema = {
  response: getPoryaResponseSchema,
  request: getPoryaRequestSchema,
  responseTransformed: getPoryaResponseSchemaTransformed,
  requestTransformed: getPoryaRequestSchemaTransformed,
};
