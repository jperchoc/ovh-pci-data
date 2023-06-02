import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId } = params;
    const notebooksIdsReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/notebooks`);
    let notebooks: ovhapi.cloud.project.dataProcessing.notebook.Notebook[] = [];
    if (notebooksIdsReq.ok) {
        const jobsIds: string[] = await notebooksIdsReq.json();
        notebooks = await Promise.all(jobsIds.map(id => fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/notebooks/${id}`).then(async (r) => await r.json())))
    }

    return {
        notebooks
    }
};