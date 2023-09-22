/*
import fetchRelog from "$helpers/fetch-relog";
import type { PageLoad } from "./$types";
import type { ovhapi } from "$types/ovh";


export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;    
    const sourcesReq = await fetch(`/api/ovh/cloud/project/${projectId}/dataIntegration/sources`); 
    let sources : ovhapi.cloud.project.dataIntegration.Source[] = [];
    if (sourcesReq.ok){
        sources = await sourcesReq.json();
    }   
    return {
        sources
    }
};
*/