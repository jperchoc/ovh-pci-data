import type { ovhapi } from "$types/ovh";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({cookies, url, fetch}) => {
    const consumerKey = cookies.get('tmpConsumerKey');
    const redirectUrl = url.searchParams.get('redirect') || '/'
    //fetch expiration date
    if (consumerKey) {
        const credReq = await fetch(`/api/ovh/auth/currentCredential`);
        const credReqJSON: ovhapi.auth.ApiCredential = await credReq.json();
        let maxAge = 60 * 60 * 24 * 7; // set default expiration date to 1 week
        let now = new Date();
        if (credReqJSON.expiration) {
            const expirationDate = new Date(credReqJSON.expiration);
            maxAge = (expirationDate.getTime() - now.getTime()) / 1000;
        }
        cookies.set("consumerKey", consumerKey, {
            path: "/",
            maxAge: maxAge
        });
    }
    cookies.delete('tmpConsumerKey');
    throw redirect(303, redirectUrl);
};