import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId, id } = params;
    const appsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/app/${id}`);
    const app: ovhapi.cloud.project.ai.app.App = await appsReq.json();
    return {
        app
    }
};