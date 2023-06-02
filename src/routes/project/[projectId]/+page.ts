import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const { projectId } = params;
    const projectsReq = await fetch(`/api/ovh/cloud/project/${projectId}`);
    const project: ovhapi.cloud.Project = await projectsReq.json();
    return {
        project
    }
};