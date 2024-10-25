import { z } from "zod";
import { postRegisterSchema } from "./post-register.schema";

// Response
export type PostRegisterRequest = z.input<typeof postRegisterSchema.request>;

export type PostRegisterRequestTransofrmed = z.infer<
  typeof postRegisterSchema.request
>;

// Request
export type PostRegisterResponse = z.input<typeof postRegisterSchema.response>;

export type PostRegisterResponseTransformed = z.infer<
  typeof postRegisterSchema.response
>;
