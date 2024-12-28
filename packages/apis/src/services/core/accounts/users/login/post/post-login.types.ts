import type { z } from "zod";
import type { postLoginSchema } from "./post-login.schema";

// Response
export type PostLoginRequest = z.input<typeof postLoginSchema.request>;

export type PostLoginRequestTransofrmed = z.infer<
  typeof postLoginSchema.request
>;

// Request
export type PostLoginResponse = z.input<typeof postLoginSchema.response>;

export type PostLoginResponseTransformed = z.infer<
  typeof postLoginSchema.response
>;
