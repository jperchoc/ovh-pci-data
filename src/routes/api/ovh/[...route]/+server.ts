import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { signRequest } from '$lib/helpers/api';

export const GET: RequestHandler = async ({ params, url, cookies }) => {
    const consumerKey = cookies.get('consumerKey');
    if (!consumerKey) {
        return json({
            message: 'Not authorized',
            httpCode: '403 Forbidden',
            errorCode: "NO_CONSUMER_KEY"
        }, {
            status: 403,
            statusText: "Not authorized",
        });
    }
    const distantRoute = `https://eu.api.ovh.com/1.0/${params.route}`;
    const distantUrl = `${distantRoute}${url.search}`;
    const timestamp = Math.round(Date.now() / 1000).toString();
    const signature = signRequest(consumerKey, 'GET', distantRoute, '', timestamp);

    const headers = {
        'X-Ovh-Application': env.AK,
        'X-Ovh-Consumer': consumerKey,
        'X-Ovh-Timestamp': timestamp,
        'X-Ovh-Signature': signature
    };

    const response = await fetch(distantUrl, { headers })
    const jsResponse = await response.json();
    return json(jsResponse, {
        status: response.status,
        statusText: response.statusText,
    });
};

export const PUT: RequestHandler = async ({ request, params, url, cookies }) => {
    const body = await request.json() || '';
    const consumerKey = cookies.get('consumerKey');
    if (!consumerKey) {
        return json({
            message: 'Not authorized',
            httpCode: '403 Forbidden',
            errorCode: "NO_CONSUMER_KEY"
        }, {
            status: 403,
            statusText: "Not authorized",
        });
    }
    const distantRoute = `https://eu.api.ovh.com/1.0/${params.route}`;
    const distantUrl = `${distantRoute}${url.search}`;
    const timestamp = Math.round(Date.now() / 1000).toString();
    const signature = signRequest(consumerKey, 'PUT', distantRoute, JSON.stringify(body), timestamp);

    const headers = {
        'X-Ovh-Application': env.AK,
        'X-Ovh-Consumer': consumerKey,
        'X-Ovh-Timestamp': timestamp,
        'X-Ovh-Signature': signature
    };

    const response = await fetch(distantUrl, { method:'PUT', headers, body: JSON.stringify(body) })
    const jsResponse = await response.json();
    return json(jsResponse, {
        status: response.status,
        statusText: response.statusText,
    });
};