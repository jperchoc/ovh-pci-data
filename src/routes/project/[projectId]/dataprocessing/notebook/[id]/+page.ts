import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId, id } = params;
    const notebookReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataProcessing/notebooks/${id}`);
    const notebook: ovhapi.cloud.project.dataProcessing.notebook.Notebook = await notebookReq.json();
    
    return {
        notebook
    }
};