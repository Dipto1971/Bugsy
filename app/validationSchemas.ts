import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(5, "Title is required with minimum of 5 characters")
    .max(200),
  description: z
    .string()
    .min(10, "Description is required with minimum of 10 characters")
    .max(1000),
});
