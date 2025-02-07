import z from "zod";

export const apiResponseSchema = z.object({
  data: z.union([
    z.array(z.any()),
    z.record(z.string(), z.any()),
    z.null(),
    z.undefined(),
  ]),
  message: z.union([z.string(), z.null(), z.undefined()]),
  error: z.union([
    z.record(z.string(), z.any()),
    z.array(z.unknown()),
    z.null(),
    z.undefined(),
  ]),
  meta: z.union([
    z
      .object({
        page: z.number(),
        per_page: z.number(),
      })
      .optional(),
    z.null(),
    z.undefined(),
  ]),
});
