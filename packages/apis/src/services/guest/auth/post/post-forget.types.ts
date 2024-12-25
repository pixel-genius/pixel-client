import { z } from "zod";
import { postForgetSchema } from "./post-forget.schema";

// Response
export type PostForgetRequest = z.input<typeof postForgetSchema.request>;

export type PostForgetRequestTransofrmed = z.infer<
  typeof postForgetSchema.request
>;

// Request
export type PostForgetResponse = z.input<typeof postForgetSchema.response>;

export type PostForgetResponseTransformed = z.infer<
  typeof postForgetSchema.response
>;
