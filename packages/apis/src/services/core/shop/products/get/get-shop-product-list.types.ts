import { z } from "zod";
import { getShopProductListSchema } from "./get-shop-product-list.schema";

// Response
export type GetShopProductListRequest = z.input<typeof getShopProductListSchema.request>;

export type GetShopProductListRequestTransofrmed = z.infer<
  typeof getShopProductListSchema.request
>;

// Request
export type GetShopProductListResponse = z.input<typeof getShopProductListSchema.response>;

export type GetShopProductListResponseTransformed = z.infer<
  typeof getShopProductListSchema.response
>;
