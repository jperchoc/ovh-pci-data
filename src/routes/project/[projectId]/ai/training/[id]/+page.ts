import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId, id } = params;
    const trainingReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job/${id}`);
    const training: ovhapi.cloud.project.ai.job.Job = await trainingReq.json();
    return {
        training
    }
};