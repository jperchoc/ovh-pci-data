import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const projectQuotasReq = await fetch(`/api/ovh/cloud/project/${projectId}/quota`);
    const projectBillingReq = await fetch(`/api/ovh/cloud/project/${projectId}/usage/current`);
    return {
        quotas: projectQuotasReq.json() as Promise<ovhapi.cloud.quota.Quotas[]>,
        billing: projectBillingReq.json() as Promise<ovhapi.cloud.usage.UsageCurrent>
    }
};