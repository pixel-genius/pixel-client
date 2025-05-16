import { z } from "zod";
import { postBecomeAutherSchema } from "./post-become-auther.schema";

// Response
export type PostBecomeAutherRequest = z.input<typeof postBecomeAutherSchema.request>;

export type PostBecomeAutherRequestTransofrmed = z.infer<
  typeof postBecomeAutherSchema.request
>;

// Request
export type PostBecomeAutherResponse = z.input<typeof postBecomeAutherSchema.response>;

export type PostBecomeAutherResponseTransformed = z.infer<
  typeof postBecomeAutherSchema.response
>;
