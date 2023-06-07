import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const projectQuotasReq = await fetch(`/api/ovh/cloud/project/${projectId}/quota`);
    const quotas: ovhapi.cloud.quota.Quotas[] = await projectQuotasReq.json();
    return {
        quotas
    }
};