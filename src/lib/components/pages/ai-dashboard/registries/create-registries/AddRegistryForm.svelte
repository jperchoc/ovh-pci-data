<script lang="ts">
	import * as Form from '$components/ui/form';

	import {
		formAddRegSchema as schema,
		type FormSchema
	} from '$components/pages/ai-dashboard/registries/create-registries/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ActionResult } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';
	import type { ovhapi } from '$types/ovh';
	import Select from '$components/ui/select/select.svelte';
	const dispatch = createEventDispatcher();

	export let form: SuperValidated<FormSchema>;
	export let action = '?/create';

	export let regions: ovhapi.cloud.project.ai.capabilities.Region[];
	let selectedRegion: string = regions[0].id;

	let submitting = false;

	const options = {
		validators: schema,
		onSubmit: () => {
			form.data.region = selectedRegion;
			submitting = true;
			dispatch('submit');
		},
		onResult: (event: { result: ActionResult; formEl: HTMLFormElement; cancel: () => void }) => {
			submitting = false;
			if (event.result.type === 'success') {
				dispatch('success');
			} else if (event.result.type === 'failure') {
				console.log(event.result.data);
				dispatch('error', { error: event.result.data?.error });
			}
		}
	};
</script>

<Form.Root {action} {options} {form} {schema} let:config>
	<Form.Field {config} name="region">
		<Form.Label>Region</Form.Label>
		<Form.Select>
			<Form.SelectTrigger placeholder="Regions" />
			<Form.SelectContent>
				{#each regions as region}
					<Form.SelectItem value={region.id}>{region.id}</Form.SelectItem>
				{/each}
			</Form.SelectContent>
		</Form.Select>
		<Form.Validation />
	</Form.Field>
	<Form.Field {config} name="username">
		<Form.Item>
			<Form.Label>Username</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="url">
		<Form.Item>
			<Form.Label>Url</Form.Label>
			<Form.Input type="string" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button type="submit" class="w-full" disabled={submitting}>Submit</Form.Button>
</Form.Root>
