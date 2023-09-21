import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
export async function load ({ fetch: _fetch, url, params }) {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const projectQuotasReq = await fetch(`/api/ovh/cloud/project/${projectId}/quota`);
    const projectBillingReq = await fetch(`/api/ovh/cloud/project/${projectId}/usage/current`);
    return {
        //content is not mendatory to load page
        streamed: {
            quotas: projectQuotasReq.json() as Promise<ovhapi.cloud.quota.Quotas[]>,
            billing: projectBillingReq.json() as Promise<ovhapi.cloud.usage.UsageCurrent>
        }
    }
};