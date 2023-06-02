import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId, id } = params;
    const jobReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/jobs/${id}`);
    const job: ovhapi.cloud.project.dataProcessing.Job = await jobReq.json();
    
    return {
        job
    }
};