import { z } from "zod";

import { postUploadfileSchema } from "./post-uploadfile.schema";

// Response
export type PostUploadfileRequest = z.input<
  typeof postUploadfileSchema.request
>;

export type PostUploadfileRequestTransofrmed = z.infer<
  typeof postUploadfileSchema.request
>;

// Request
export type PostUploadfileResponse = z.input<
  typeof postUploadfileSchema.response
>;

export type PostUploadfileResponseTransformed = z.infer<
  typeof postUploadfileSchema.response
>;
