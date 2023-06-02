import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId } = params;
    const databasesIdsReq = await fetch(`/api/ovh/cloud/project/${projectId}/database/service`);
    let dbServices: ovhapi.cloud.project.database.Service[] = [];
    if (databasesIdsReq.ok) {
        const dbIds: string[] = await databasesIdsReq.json();
        dbServices = await Promise.all(dbIds.map(id => fetch(`/api/ovh/cloud/project/${projectId}/database/service/${id}`).then(async (r) => await r.json())))
    }

    return {
        dbServices
    }
};