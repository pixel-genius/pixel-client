import { apiResponseSchema } from "#schema/api-response-schema";
import { z } from "zod";

// Request
export const postAiSupportGptRequestSchemaTransformed = z
  .object({
    prompt: z.string(),
  })
  .transform((data) => data);

// Response

// "bot": {
//       "message": "Sure, you can search by clicking on the search button at the top of the page.",
//       "suggestions": [],
//       "status": "success",
//       "action": {
//         "type": "cursor",
//         "target": "search-product-btn"
//       }
// type: "move" | "click" | "type" | "fill";
// target: string;
// text?: string;
// delay?: number;
// typingSpeed?: number;
// offsetX?: number;
// offsetY?: number;

export const postAiSupportGptResponseSchemaTransofrmed = apiResponseSchema
  .extend({
    data: z.object({
      agent: z.object({
        message: z.string(),
        suggestions: z.array(z.string()),
        status: z.string(),
        action: z.object({
          type: z.string(),
          task: z.array(
            z.object({
              type: z.enum(["move", "click", "type", "fill"]),
              target: z.string(),
              delay: z.number().optional(),
              offsetX: z.number().optional(),
              offsetY: z.number().optional(),
              text: z.string().optional(),
              typingSpeed: z.number().optional(),
            }),
          ),
        }),
      }),
    }),
  })
  .transform((data) => data);

export const postAiSupportGptSchema = {
  response: postAiSupportGptResponseSchemaTransofrmed,
  request: postAiSupportGptRequestSchemaTransformed,
};
