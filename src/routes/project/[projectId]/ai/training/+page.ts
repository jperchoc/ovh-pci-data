import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const trainingsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job`);
    const trainings: ovhapi.cloud.project.ai.job.Job[]  = await trainingsReq.json();
    return {
        trainings
    }
};