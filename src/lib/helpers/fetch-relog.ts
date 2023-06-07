import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";

/**
 * Fetch the ovh api and handle redirect to login on 403
 * @param fetch : original fetch function, extracted from event in load method
 * @param urlFrom : url object from where the request orignates
 * @param path : path to fetch
 * @returns : response from server, or redirect to login endpoint
 */
export default async function fetchRelog(
    fetch:(input: URL |RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
    urlFrom: URL,
    path: string
) {
    const req = fetch(path);
    if (!browser) return req;
    const res = await(req);
    if (res.status === 403) {
        throw redirect(303, `/api/auth/login?redirect=${urlFrom.pathname}`);
    } else {
        return res;
    }
}