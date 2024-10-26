import { z } from "zod";
import { putLoginSchema } from "./put-login.schema";

// Response
export type PutLoginRequest = z.input<typeof putLoginSchema.request>;

export type PutLoginRequestTransofrmed = z.infer<
  typeof putLoginSchema.request
>;

// Request
export type PutLoginResponse = z.input<typeof putLoginSchema.response>;

export type PutLoginResponseTransformed = z.infer<
  typeof putLoginSchema.response
>;
