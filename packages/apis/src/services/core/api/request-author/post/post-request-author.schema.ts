import { z } from "zod";

// Request
export const postRequestAuthorRequestSchemaTransformed = z
  .object({
    // keyPayload: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    link: z.string(),
    file: z.number(),
    information: z.string(),
    portfolioLink: z.string(),
  })
  .transform((data) => ({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    link: data.link,
    file: data.file,
    information: data.information,
    portfolioLink: data.portfolioLink,
  }));

// Response
export const postRequestAuthorResponseSchemaTransofrmed = z
  .object({
    // keyBody: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    link: z.string(),
    file: z.number(),
    information: z.string(),
  })
  .transform((data) => data);

export const postRequestAuthorSchema = {
  response: postRequestAuthorResponseSchemaTransofrmed,
  request: postRequestAuthorRequestSchemaTransformed,
};
