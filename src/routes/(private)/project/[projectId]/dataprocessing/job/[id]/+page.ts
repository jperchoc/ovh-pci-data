import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId, id } = params;
    const jobReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/jobs/${id}`);
    const job: ovhapi.cloud.project.dataProcessing.Job = await jobReq.json();
    
    return {
        job
    }
};