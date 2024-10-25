import { z } from "zod";
import { deleteLoginSchema } from "./delete-login.schema";

// Response
export type DeleteLoginRequest = z.input<typeof deleteLoginSchema.request>;

export type DeleteLoginRequestTransofrmed = z.infer<
  typeof deleteLoginSchema.request
>;

// Request
export type DeleteLoginResponse = z.input<typeof deleteLoginSchema.response>;

export type DeleteLoginResponseTransformed = z.infer<
  typeof deleteLoginSchema.response
>;
