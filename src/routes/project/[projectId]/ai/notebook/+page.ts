import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch:_fetch, url, params}) => {
    const { projectId } = params;
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const notebooksReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/notebook`);
    const notebooks: ovhapi.cloud.project.ai.notebook.Notebook[] = await notebooksReq.json();
    return {
        notebooks
    }
};