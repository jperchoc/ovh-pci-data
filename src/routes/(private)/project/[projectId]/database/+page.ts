import fetchRelog from '$helpers/fetch-relog';
import type { ovhapi } from '$types/ovh';
import type { PageLoad } from './$types';

export const load = (async ({ fetch: _fetch, url, params, data }) => {
	const fetch = (path: string) => fetchRelog(_fetch, url, path);
	const { projectId } = params;
	const databasesIdsReq = await fetch(`/api/ovh/cloud/project/${projectId}/database/service`);
	let dbServices: ovhapi.cloud.project.database.Service[] = [];
	if (databasesIdsReq.ok) {
		const dbIds: string[] = await databasesIdsReq.json();
		dbServices = await Promise.all(
			dbIds.map((id) =>
				fetch(`/api/ovh/cloud/project/${projectId}/database/service/${id}`).then(
					async (r) => await r.json()
				)
			)
		);
	}

	return {
		...data,
		dbServices
	};
}) satisfies PageLoad;
