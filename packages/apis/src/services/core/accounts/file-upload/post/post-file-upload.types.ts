import { z } from "zod";

import { postFileUploadSchema } from "./post-file-upload.schema";

// Response
export type PostFileUploadRequest = z.input<
  typeof postFileUploadSchema.request
>;

export type PostFileUploadRequestTransformed = z.infer<
  typeof postFileUploadSchema.request
>;

// Request
export type PostFileUploadResponse = z.input<
  typeof postFileUploadSchema.response
>;

export type PostFileUploadResponseTransformed = z.infer<
  typeof postFileUploadSchema.response
>;
