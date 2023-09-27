import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;

    const fetchApp = async (): Promise<ovhapi.cloud.project.ai.app.App[]> => {
        const appsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/app`);
        return appsReq.json();
    }

    const fetchJob = async (): Promise<ovhapi.cloud.project.ai.job.Job[]> => {
        const jobsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job`);
        return jobsReq.json();
    }

    const fetchNb = async (): Promise<ovhapi.cloud.project.ai.notebook.Notebook[]> => {
        const nbsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/notebook`);
        return nbsReq.json();
    }

    return {
        apps: fetchApp(),
        jobs: fetchJob(),
        notebooks: fetchNb(),
    }
};