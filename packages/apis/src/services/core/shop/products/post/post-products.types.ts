import { postProductsSchema } from "./post-products.schema";
import { z } from "zod";

// Request
export type PostProductsRequest = z.input<typeof postProductsSchema.request>;

export type PostProductsRequestTransformed = z.infer<
  typeof postProductsSchema.request
>;

// Response
export type PostProductsResponse = z.input<typeof postProductsSchema.response>;

export type PostProductsResponseTransformed = z.infer<
  typeof postProductsSchema.response
>;
