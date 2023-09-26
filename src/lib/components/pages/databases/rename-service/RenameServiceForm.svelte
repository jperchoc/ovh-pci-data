<script lang="ts">
	import * as Form from '$components/ui/form';

	import { formSchema, type FormSchema } from '$components/pages/databases/rename-service/schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<FormSchema>;
	export let action = '?/rename';
</script>

<Form.Root {action} method="POST" {form} schema={formSchema} let:config>
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
			<Form.Input type="hidden"/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="engine">
		<Form.Item>
			<Form.Input type="hidden"/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button type="submit" class="w-full">Submit</Form.Button>
</Form.Root>
