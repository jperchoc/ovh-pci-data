import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params}) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;    
    const appReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/app`); 
    const jobReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/job`); 
    const nbReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/notebook`); 
    //const tutoReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/guides?lang=fr_fr`); 
    let apps : ovhapi.cloud.project.ai.app.App[] = [];
    let jobs: ovhapi.cloud.project.ai.job.Job[] = [];
    let notebooks: ovhapi.cloud.project.ai.notebook.Notebook[] = []; 
    //let tutos: ovhapi.cloud.stack.InstructionGuide[] = []
    if (appReq.ok){
        apps = await appReq.json();
    } 
    if (jobReq.ok){
        jobs = await jobReq.json();
    }     
    if (nbReq.ok){
        notebooks = await nbReq.json();
    } 
    /*if (tutoReq.ok){
        tutos = await tutoReq.json();
    } */
    return {
        apps, jobs, notebooks//, tutos
    }
};