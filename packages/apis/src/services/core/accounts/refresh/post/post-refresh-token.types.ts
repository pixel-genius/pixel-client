import { z } from "zod";
import { postRefreshTokenSchema } from "./post-refresh-token.schema";

// Response
export type PostRefreshTokenRequest = z.input<typeof postRefreshTokenSchema.request>;

export type PostRefreshTokenRequestTransformed = z.infer<
  typeof postRefreshTokenSchema.request
>;

// Request
export type PostRefreshTokenResponse = z.input<typeof postRefreshTokenSchema.response>;

export type PostRefreshTokenResponseTransformed = z.infer<
  typeof postRefreshTokenSchema.response
>;
