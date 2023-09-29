import fetchRelog from "$helpers/fetch-relog";
import type { ovhapi } from "$types/ovh";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch: _fetch, url, params }) => {
    const fetch = (path: string) => fetchRelog(_fetch, url, path);
    const { projectId } = params;

    const fetchRegistries = async (): Promise<ovhapi.cloud.project.ai.registry.Registry[]> => {
        const regisReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/registry`);
        return regisReq.json();
    }

    const fetchCapaReg = async (): Promise<ovhapi.cloud.project.ai.capabilities.Region[]> => {
        const capaRegsReq = await fetch(`/api/ovh/cloud/project/${projectId}/ai/capabilities/region`);
        return capaRegsReq.json();
    }

    return {
        regions: fetchCapaReg(),
        streamed: {
            registries: fetchRegistries(),
        }
    }
};