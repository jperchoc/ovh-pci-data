import fetchRelog from "$helpers/fetch-relog";
import { MAX_ITEMS_FETCH } from "$lib/global.constants";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;
    const jobsIdsReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/jobs`);
    let jobs: ovhapi.cloud.project.dataProcessing.Job[] = [];
    if (jobsIdsReq.ok) {
        let jobsIds: string[] = await jobsIdsReq.json();
        //Do not fetch to much jobs
        jobsIds = jobsIds.slice(0, MAX_ITEMS_FETCH)
        jobs = await Promise.all(jobsIds.map(id => fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/jobs/${id}`).then(async (r) => await r.json())))
    }

    return {
        jobs
    }
};