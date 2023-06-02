import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId, id } = params;
    const dbReq = await fetch(`/api/ovh/cloud/project/${projectId}/database/service/${id}`);
    const service: ovhapi.cloud.project.database.Service = await dbReq.json();
    
    return {
        service
    }
};