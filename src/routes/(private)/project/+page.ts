import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";

export const load: PageLoad = async ({ fetch: _fetch, url }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path)
    const projectsReq = await fetch(`/api/ovh/cloud/project`);
    let projects: ovhapi.cloud.Project[] = [];
    if (projectsReq.ok) {
        const projectsIds: string[] = await projectsReq.json();
        projects = await Promise.all(projectsIds.map(id => fetch(`/api/ovh/cloud/project/${id}`).then(async (r) => await r.json())))
    } else {
        throw redirect(303, `/api/auth/login?redirect=${url.pathname}`)
    }

    return {
        projects
    }
};