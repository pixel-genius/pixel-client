import { z } from "zod";
import { getLoginSchema } from "./get-login.schema";

// Response
export type GetLoginRequest = z.input<typeof getLoginSchema.request>;

export type GetLoginRequestTransofrmed = z.infer<
  typeof getLoginSchema.request
>;

// Request
export type GetLoginResponse = z.input<typeof getLoginSchema.response>;

export type GetLoginResponseTransformed = z.infer<
  typeof getLoginSchema.response
>;
