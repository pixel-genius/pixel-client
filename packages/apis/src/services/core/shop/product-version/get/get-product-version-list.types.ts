import { z } from "zod";

import { getProductVersionListSchema } from "./get-product-version-list.schema";

// Response
export type GetProductVersionListRequest = z.input<
  typeof getProductVersionListSchema.request
>;

export type GetProductVersionListRequestTransformed = z.infer<
  typeof getProductVersionListSchema.request
>;

// Request
export type GetProductVersionListResponse = z.input<
  typeof getProductVersionListSchema.response
>;

export type GetProductVersionListResponseTransformed = z.infer<
  typeof getProductVersionListSchema.response
>;
