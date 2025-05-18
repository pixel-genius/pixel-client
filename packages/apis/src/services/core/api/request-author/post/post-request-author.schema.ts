import { z } from "zod";

// Request
export const postRequestAuthorRequestSchemaTransformed = z
  .object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    portfolioLink: z.string().url("Invalid portfolio URL"),
    file: z.any(), // Changed to any to handle File object
    information: z.string().optional(),
  })
  .transform((data) => ({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    link: data.portfolioLink,
    file: data.file ? 1 : 0, // Convert file to number
    information: data.information || "",
  }));

// Response
export const postRequestAuthorResponseSchemaTransofrmed = z
  .object({
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
