import type { z } from "zod";

import type { postVerifyOtpSchema } from "./post-verify-otp.schema";

// Response
export type PostVerifyOtpRequest = z.input<typeof postVerifyOtpSchema.request>;

export type PostVerifyOtpRequestTransformed = z.infer<
  typeof postVerifyOtpSchema.request
>;

// Request
export type PostVerifyOtpResponse = z.input<
  typeof postVerifyOtpSchema.response
>;

export type PostVerifyOtpResponseTransformed = z.infer<
  typeof postVerifyOtpSchema.response
>;
