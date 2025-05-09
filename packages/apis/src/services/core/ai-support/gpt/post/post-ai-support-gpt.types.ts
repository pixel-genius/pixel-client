import { z } from "zod";
import { postAiSupportGptSchema } from "./post-ai-support-gpt.schema";

// Response
export type PostAiSupportGptRequest = z.input<typeof postAiSupportGptSchema.request>;

export type PostAiSupportGptRequestTransofrmed = z.infer<
  typeof postAiSupportGptSchema.request
>;

// Request
export type PostAiSupportGptResponse = z.input<typeof postAiSupportGptSchema.response>;

export type PostAiSupportGptResponseTransformed = z.infer<
  typeof postAiSupportGptSchema.response
>;
