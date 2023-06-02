import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const projectsReq = await fetch(`/api/ovh/cloud/project`);
    let projects: ovhapi.cloud.Project[] = [];
    if (projectsReq.ok) {
        const projectsIds: string[] = await projectsReq.json();
        projects = await Promise.all(projectsIds.map(id => fetch(`/api/ovh/cloud/project/${id}`).then(async (r) => await r.json())))
    }

    return {
        projects
    }
};