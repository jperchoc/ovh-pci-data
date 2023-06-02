import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { accessRules } from '$lib/helpers/api';
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ cookies, url }) => {
    const headers = {
        'Accept': 'application/json',
        'X-Ovh-Application': env.AK,
        'Content-Type': 'application/json;charset=UTF-8',
    }
    const redirectUrl = env.FORCE_HTTP === 'enabled' ? `http://${url.host}` : url.origin;
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
    const { consumerKey, validationUrl } = await response.json();
	cookies.set("consumerKey", consumerKey, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, //1week 
    });

	throw redirect(303, validationUrl)
};