import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formDelRegSchema } from '$components/pages/ai-dashboard/registries/delete-registries/schema';
import { formAddRegSchema } from '$components/pages/ai-dashboard/registries/create-registries/schema';
import fetchRelog from '$helpers/fetch-relog';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	return {
		delRegform: superValidate(formDelRegSchema),
		addRegform: superValidate(formAddRegSchema),
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	delete: async (event) => {
		const { fetch: _fetch, url, params } = event;
		const { projectId } = params;
		const fetch = (path: string, init?: RequestInit | undefined) =>
			fetchRelog(_fetch, url, path, init);
		const form = await superValidate(event, formDelRegSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const res = await fetch(
			`/api/ovh/cloud/project/${projectId}/ai/registry/${form.data.id}`,
			{
				method: 'DELETE',
			}
		);
		if (!res.ok) {
			return fail(400, {
				form,
				error: {
					status: res.status,
					message: res.statusText
				}
			});
		}
		return {
			form
		};
	},
	create: async (event) => {
		const { fetch: _fetch, url, params } = event;
		const { projectId } = params;
		const fetch = (path: string, init?: RequestInit | undefined) =>
			fetchRelog(_fetch, url, path, init);
		const form = await superValidate(event, formAddRegSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const res = await fetch(
			`/api/ovh/cloud/project/${projectId}/ai/registry`,
			{
				method: 'POST',
				body: JSON.stringify({
					password: form.data.password,
					url: form.data.url,
					username: form.data.username,
					region: form.data.region
				})
			}
		);
		if (!res.ok) {
			return fail(400, {
				form,
				error: {
					status: res.status,
					message: res.statusText
				}
			});
		}
		return {
			form
		};
	}
};
