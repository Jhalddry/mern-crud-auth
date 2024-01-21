import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title must be a string"
    }),
    description: z.string({
        required_error: "Description should be a string"
    }),
    date: z.string().datetime().optional()
})