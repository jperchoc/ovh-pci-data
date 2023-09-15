import fetchRelog from "$helpers/fetch-relog";
import { projectIdStore } from "$stores/projectsStore";
import type { ovhapi } from "$types/ovh";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path)
    const { projectId } = params;
    const projectsReq = await fetch(`/api/ovh/cloud/project/${projectId}`);
    const project: ovhapi.cloud.Project = await projectsReq.json();
    projectIdStore.set(projectId);
    return {
        project
    }
};