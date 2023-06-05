import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const { projectId } = params;
    const projectQuotasReq = await fetch(`/api/ovh/cloud/project/${projectId}/quota`);
    const quotas: ovhapi.cloud.quota.Quotas[] = await projectQuotasReq.json();
    return {
        quotas
    }
};