import { env } from '$env/dynamic/private';
import sha1 from 'sha1';

export const accessRules = [
    {
        'path': '/*',
        'method': 'GET'
    }, 
    {
        'path': '/*',
        'method': 'POST'
    }, 
    {
        'path': '/*',
        'method': 'PUT'
    }, 
    {
        'path': '/*',
        'method': 'DELETE'
    }, 
];

export const signRequest = (consumerKey: string, method: string, url: string, body: string, timestamp: string):string => {
     const s = [
        env.AS,
        consumerKey,
        method,
        url,
        body,
        timestamp
    ];
    const sign = `$1$${sha1(s.join('+'))}`;
    return sign;
}