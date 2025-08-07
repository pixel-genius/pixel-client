import type { z } from "zod";

import type { postResetPasswordSchema } from "./post-reset-password.schema";

// Response
export type PostResetPasswordRequest = z.input<
  typeof postResetPasswordSchema.request
>;

export type PostResetPasswordRequestTransformed = z.infer<
  typeof postResetPasswordSchema.request
>;

// Request
export type PostResetPasswordResponse = z.input<
  typeof postResetPasswordSchema.response
>;

export type PostResetPasswordResponseTransformed = z.infer<
  typeof postResetPasswordSchema.response
>;
