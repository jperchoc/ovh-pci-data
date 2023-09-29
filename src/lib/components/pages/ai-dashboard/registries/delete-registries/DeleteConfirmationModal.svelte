<script lang="ts">
	import * as Form from '$components/ui/form';

	import {
		formDelRegSchema as schema,
		type FormSchema
	} from '$components/pages/ai-dashboard/registries/delete-registries/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ActionResult } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let form: SuperValidated<FormSchema>;
	export let action = '?/delete';
	export let registryId = form.data.name;

	let submitting = false;

	const options = {
		validators: schema,
		onSubmit: () => {
			submitting = true;
			dispatch('submit');
		},
        onCancel: () => {
			submitting = false;
			dispatch('cancel');
		},
		onResult: (event: { result: ActionResult; formEl: HTMLFormElement; cancel: () => void }) => {
			console.log('je suis dans result');
			console.log(event.result.type);
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
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Êtes-vous sûr de vouloir supprimer le registry {registryId} ?</Form.Label>
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="id">
		<Form.Item>
			<Form.Input type="hidden" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<div class="pt-2 flex justify-around">
		<Form.Button type="submit" disabled={submitting}>Confirm</Form.Button>
	</div>
</Form.Root>
