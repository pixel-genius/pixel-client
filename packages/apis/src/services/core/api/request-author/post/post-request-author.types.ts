import { z } from "zod";
import { postRequestAuthorSchema } from "./post-request-author.schema.js";

// Response
export type PostRequestAuthorRequest = z.input<
  typeof postRequestAuthorSchema.request
>;

export type PostRequestAuthorRequestTransofrmed = z.infer<
  typeof postRequestAuthorSchema.request
>;

// Request
export type PostRequestAuthorResponse = z.input<
  typeof postRequestAuthorSchema.response
>;

export type PostRequestAuthorResponseTransformed = z.infer<
  typeof postRequestAuthorSchema.response
>;
