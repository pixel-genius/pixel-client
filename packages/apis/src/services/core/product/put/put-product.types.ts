import { z } from "zod";
import { putProductSchema } from "./put-product.schema";

// Response
export type PutProductRequest = z.input<typeof putProductSchema.request>;

export type PutProductRequestTransofrmed = z.infer<
  typeof putProductSchema.request
>;

// Request
export type PutProductResponse = z.input<typeof putProductSchema.response>;

export type PutProductResponseTransformed = z.infer<
  typeof putProductSchema.response
>;
