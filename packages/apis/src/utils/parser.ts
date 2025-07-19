import { ZodTypeAny, z } from "zod";

export const payloadParser = <T extends ZodTypeAny = ZodTypeAny>(
  schema: T,
  payload: z.infer<typeof schema>,
): z.infer<typeof schema> => {
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    throw new Error("Response data validation failed");
  }

  return parsed.data;
};
