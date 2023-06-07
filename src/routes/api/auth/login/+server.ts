import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { accessRules } from '$helpers/api';
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ cookies, url, fetch }) => {
    const redirectQueryParam = url.searchParams.get('redirect') || null;
    const headers = {
        'Accept': 'application/json',
        'X-Ovh-Application': env.AK,
        'Content-Type': 'application/json;charset=UTF-8',
    }
    let redirectUrl = env.FORCE_HTTP === 'enabled' ? `http://${url.host}/api/auth/callback` : `${url.origin}/api/auth/callback`;
    if (redirectQueryParam) {
        redirectUrl += `?redirect=${redirectQueryParam}`
    }
    const response = await fetch(`${env.API_BASE_URL}/auth/credential`,
        {
            headers,
            method: "POST",
            body: JSON.stringify({
                accessRules,
                redirection: redirectUrl
            }),
        }
    );
    const { consumerKey, validationUrl } : { consumerKey:string, validationUrl:string} = await response.json();

	cookies.set("tmpConsumerKey", consumerKey);
	throw redirect(303, validationUrl)
};