import { z } from "zod";

export const AuthLocalResponseSchema = z.object({
  jwt: z.string(),
  user: z.object({
    id: z.number(),
    username: z.string(),
    email: z.string().email(),
    provider: z.string(),
    confirmed: z.boolean(),
    blocked: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
});

export const AuthLocalResponseSchemaTransformed =
  AuthLocalResponseSchema.transform((data) => data);

export const AuthLocalRequestSchema = z.object({
  id: z.number(),
});

export const AuthLocalRequestSchemaTransformed =
  AuthLocalRequestSchema.transform((data) => ({ p_id: data.id }));

export const AuthLocalSchema = {
  response: AuthLocalResponseSchema,
  request: AuthLocalRequestSchema,
  responseTransformed: AuthLocalResponseSchemaTransformed,
  requestTransformed: AuthLocalRequestSchemaTransformed,
};
