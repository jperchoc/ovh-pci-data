import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId, id } = params;
    const trainingReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job/${id}`);
    const training: ovhapi.cloud.project.ai.job.Job = await trainingReq.json();
    return {
        training
    }
};