import { z } from 'zod';
export const formDelRegSchema = z.object({
	id: z.string().length(36),
	name: z.string().max(50),
});
export type FormSchema = typeof formDelRegSchema;