import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
export async function load ({ fetch: _fetch, url, params }) {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const fetchBilling = async () : Promise<ovhapi.cloud.usage.UsageCurrent | ovhapi.services.consumption.Summary> => {
        const projectBillingReq = await fetch(`/api/ovh/cloud/project/${projectId}/usage/current`);
        if (projectBillingReq.ok) {
            return projectBillingReq.json() as Promise<ovhapi.cloud.usage.UsageCurrent>;
        } else {
            const serviceInfoReq = await fetch(`/api/ovh/cloud/project/${projectId}/serviceInfos`);
            const serviceInfos = await serviceInfoReq.json() as Promise<ovhapi.services.Service>;
            const newBillReq = await fetch(`/api/ovh/services/${(await serviceInfos).serviceId}/consumption`)
            return newBillReq.json() as Promise<ovhapi.services.consumption.Summary>;
        }
    }
    const fetchQuota = async () : Promise<ovhapi.cloud.quota.Quotas[]> => {
        const projectQuotasReq = await fetch(`/api/ovh/cloud/project/${projectId}/quota`);
        return await projectQuotasReq.json();
    }
    
    return {
        streamed: {
            quotas: fetchQuota(),
            billing: fetchBilling()
        }
    } 
};