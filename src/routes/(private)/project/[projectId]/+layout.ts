import { projectIdStore } from "$stores/projectsStore";

export const load = async ({ fetch: _fetch, url, params }) => {
    const { projectId } = params;
    projectIdStore.set(projectId);
    return {}
};