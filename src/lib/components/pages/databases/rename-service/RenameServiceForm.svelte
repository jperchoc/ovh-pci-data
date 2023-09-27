<script lang="ts">
	import * as Form from '$components/ui/form';

	import {
		formSchema as schema,
		type FormSchema
	} from '$components/pages/databases/rename-service/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { ActionResult } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let form: SuperValidated<FormSchema>;
	export let action = '?/rename';

	let submitting = false;

	const options = {
		validators: schema,
		onSubmit: () => {
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
	<Form.Field {config} name="description">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Description>This is your service name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="id">
		<Form.Item>
			<Form.Input type="hidden" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="engine">
		<Form.Item>
			<Form.Input type="hidden" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button type="submit" class="w-full" disabled={submitting}>Submit</Form.Button>
</Form.Root>
