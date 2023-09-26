import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "$components/pages/databases/rename-service/schema";
import fetchRelog from "$helpers/fetch-relog";

export const load = (async () => {
    return {
        form: superValidate(formSchema)
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    rename: async (event) => {
      const { fetch: _fetch, url, params} = event;
      const { projectId } = params;
      const fetch = (path: string, init?: RequestInit | undefined) => fetchRelog(_fetch, url, path, init);
      const form = await superValidate(event, formSchema);
      if (!form.valid) {
        return fail(400, {
          form
        });
      }
      const res = await fetch(`/api/ovh/cloud/project/${projectId}/database/${form.data.engine}/${form.data.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          description: form.data.description
        })
      })
      return {
        form,
        result: res.ok ? {
          type: 'success',
          errors: null
        } : {
          type: 'error',
          errors: [
            'Totally need to rework this part, but its already late',
            res.statusText
          ]
        }
      };
    }
  };