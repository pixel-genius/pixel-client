import { z } from "zod";
import { patchLoginSchema } from "./patch-login.schema";

// Response
export type PatchLoginRequest = z.input<typeof patchLoginSchema.request>;

export type PatchLoginRequestTransofrmed = z.infer<
  typeof patchLoginSchema.request
>;

// Request
export type PatchLoginResponse = z.input<typeof patchLoginSchema.response>;

export type PatchLoginResponseTransformed = z.infer<
  typeof patchLoginSchema.response
>;
