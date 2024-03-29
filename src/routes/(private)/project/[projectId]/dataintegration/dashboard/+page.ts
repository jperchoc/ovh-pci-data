import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;    
    const wfsReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataIntegration/workflows`); 
    let workflows : ovhapi.cloud.project.dataIntegration.Workflow[] = [];
    if (wfsReq.ok){
        workflows = await wfsReq.json();
    }   
    return {
        workflows
    }
};