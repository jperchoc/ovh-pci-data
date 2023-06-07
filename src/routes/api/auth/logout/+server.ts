import { redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ cookies }) => {
    cookies.delete('consumerKey', { path: '/'});
    throw redirect(303, '/');
};