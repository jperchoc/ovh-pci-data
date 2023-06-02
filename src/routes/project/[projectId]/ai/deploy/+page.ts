import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params}) => {
    const { projectId } = params;
    const appsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/app`);
    const apps: ovhapi.cloud.project.ai.app.App[] = await appsReq.json();
    return {
        apps
    }
};