import { z } from 'zod';
export const formAddRegSchema = z.object({
	password: z.string().nonempty(),
	region: z.string().nonempty(),
	url: z.string().nonempty().max(250),
    username: z.string().nonempty().max(50),
});
export type FormSchema = typeof formAddRegSchema;