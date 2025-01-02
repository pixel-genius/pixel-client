import z from "zod";

export const apiResponseSchema = z.object({
  data: z.union([z.array(z.any()), z.record(z.string(), z.any()), z.null()]),
  message: z.union([z.string(), z.null()]),
  error: z.union([z.record(z.string(), z.any()), z.array(z.unknown()), z.null()]),
  meta: z.union([
    z
      .object({
        page: z.number(),
        per_page: z.number(),
      })
      .optional(),
    z.null(),
  ]),
});
