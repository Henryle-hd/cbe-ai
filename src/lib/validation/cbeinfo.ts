import{ z } from 'zod'

export const addInfoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  main_body: z.string().min(1, { message: "The main body required" }),
});


export type AddInfoInput = z.infer<typeof addInfoSchema>