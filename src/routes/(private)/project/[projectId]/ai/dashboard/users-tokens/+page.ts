import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;

    const fetchToken = async (): Promise<ovhapi.cloud.project.ai.token.Token[]> => {
        const tokensReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/token`);
        return tokensReq.json();
    }

    return {
        streamed: {
            tokens: fetchToken(),
        }
    }
};