import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId } = params;
    const trainingsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job`);
    const trainings: ovhapi.cloud.project.ai.job.Job[]  = await trainingsReq.json();
    return {
        trainings
    }
};