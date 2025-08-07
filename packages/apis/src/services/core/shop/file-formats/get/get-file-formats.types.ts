import { getFileFormatsSchema } from "./get-file-formats.schema";
import { z } from "zod";

// Request
export type GetFileFormatsRequest = z.input<
  typeof getFileFormatsSchema.request
>;

export type GetFileFormatsRequestTransformed = z.infer<
  typeof getFileFormatsSchema.request
>;

// Response
export type GetFileFormatsResponse = z.input<
  typeof getFileFormatsSchema.response
>;

export type GetFileFormatsResponseTransformed = z.infer<
  typeof getFileFormatsSchema.response
>;
