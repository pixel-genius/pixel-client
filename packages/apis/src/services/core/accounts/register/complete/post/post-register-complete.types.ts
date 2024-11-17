import { z } from "zod";
import { postRegisterCompleteSchema } from "./post-register-complete.schema";

// Response
export type PostRegisterCompleteRequest = z.input<typeof postRegisterCompleteSchema.request>;

export type PostRegisterCompleteRequestTransofrmed = z.infer<
  typeof postRegisterCompleteSchema.request
>;

// Request
export type PostRegisterCompleteResponse = z.input<typeof postRegisterCompleteSchema.response>;

export type PostRegisterCompleteResponseTransformed = z.infer<
  typeof postRegisterCompleteSchema.response
>;
