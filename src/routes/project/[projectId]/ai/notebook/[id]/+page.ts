import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId, id } = params;
    const notebookReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/notebook/${id}`);
    const notebook: ovhapi.cloud.project.ai.notebook.Notebook = await notebookReq.json();
    return {
        notebook
    }
};