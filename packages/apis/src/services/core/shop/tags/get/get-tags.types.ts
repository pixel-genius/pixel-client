import { getTagsSchema } from "./get-tags.schema";
import { z } from "zod";

// Request
export type GetTagsRequest = z.input<typeof getTagsSchema.request>;

export type GetTagsRequestTransformed = z.infer<typeof getTagsSchema.request>;

// Response
export type GetTagsResponse = z.input<typeof getTagsSchema.response>;

export type GetTagsResponseTransformed = z.infer<typeof getTagsSchema.response>;
