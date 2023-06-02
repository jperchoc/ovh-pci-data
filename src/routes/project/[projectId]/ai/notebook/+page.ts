import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId } = params;
    const notebooksReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/notebook`);
    const notebooks: ovhapi.cloud.project.ai.notebook.Notebook[] = await notebooksReq.json();
    return {
        notebooks
    }
};