import { z } from "zod";
export const formSchema = z.object({
  id: z.string().length(36),
  description: z.string().min(2).max(50),
  engine: z.string().nonempty()
});
export type FormSchema = typeof formSchema;