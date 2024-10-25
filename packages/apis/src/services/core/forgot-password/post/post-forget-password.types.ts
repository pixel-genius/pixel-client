import { z } from "zod";
import { postForgetPasswordSchema } from "./post-forget-password.schema";

// Response
export type PostForgetPasswordRequest = z.input<typeof postForgetPasswordSchema.request>;

export type PostForgetPasswordRequestTransofrmed = z.infer<
  typeof postForgetPasswordSchema.request
>;

// Request
export type PostForgetPasswordResponse = z.input<typeof postForgetPasswordSchema.response>;

export type PostForgetPasswordResponseTransformed = z.infer<
  typeof postForgetPasswordSchema.response
>;
