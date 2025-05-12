import { z } from "zod";
import { getProductVersionsSchema } from "./get-product-versions.schema";

// Response
export type GetProductVersionsRequest = z.input<typeof getProductVersionsSchema.request>;

export type GetProductVersionsRequestTransofrmed = z.infer<
  typeof getProductVersionsSchema.request
>;

// Request
export type GetProductVersionsResponse = z.input<typeof getProductVersionsSchema.response>;

export type GetProductVersionsResponseTransformed = z.infer<
  typeof getProductVersionsSchema.response
>;
