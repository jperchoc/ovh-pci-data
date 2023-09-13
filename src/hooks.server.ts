import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    const { cookies, url } = event;
    const consumerKey = cookies.get('consumerKey');

    if (url.pathname.startsWith('/project') && !consumerKey) {
        throw redirect(303, `/api/auth/login?redirect=${url.pathname}`);
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;
