import type { z } from "zod";

import type { postForgetPasswordSchema } from "./post-forget-password.schema";

// Response
export type PostForgetPasswordRequest = z.input<
  typeof postForgetPasswordSchema.request
>;

export type PostForgetPasswordRequestTransformed = z.infer<
  typeof postForgetPasswordSchema.request
>;

// Request
export type PostForgetPasswordResponse = z.input<
  typeof postForgetPasswordSchema.response
>;

export type PostForgetPasswordResponseTransformed = z.infer<
  typeof postForgetPasswordSchema.response
>;
