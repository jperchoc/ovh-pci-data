import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path)
    const { projectId } = params;
    const appsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/app`);
    const apps: ovhapi.cloud.project.ai.app.App[] = await appsReq.json();
    return {
        apps
    }
};