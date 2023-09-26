<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { writable } from 'svelte/store';
	import ServicesTable from '$components/pages/databases/table/ServicesTable.svelte';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import type { ovhapi } from '$types/ovh';
	import type { ActionData, PageData } from './$types';
	import * as Dialog from '$components/ui/dialog';
	import RenameServiceForm from '$components/pages/databases/rename-service/RenameServiceForm.svelte';
	import Alert from '$components/ui/alert/alert.svelte';

	export let data: PageData;
	export let form: ActionData;

	$: services = data.dbServices;

	$: {
		if (form?.result?.type === 'success') {
			console.log('yay')
			$dialogOpen = false;
		}
	}

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/database/service`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});

	const dialogOpen = writable(false);
	const openRenameModale = (item: ovhapi.cloud.project.database.Service) => {
		const serviceToUpdate = services.find(s => s.id === item.id);
		if (!serviceToUpdate) return;
		$dialogOpen = true;
		data.form.data.description = serviceToUpdate.description;
		data.form.data.id = serviceToUpdate.id;
		data.form.data.engine = serviceToUpdate.engine;
	}
</script>
{#if form?.result?.type === 'success'}
	<Alert class="mb-2 bg-green-100 text-green-800" variant="default" >Yay</Alert>
{/if}
<Card>
	<CardHeader>
		<h2 class="font-bold text-xl">Databases</h2>
	</CardHeader>
	<CardContent class="p-0 pb-4">
		{#if services}
			<ServicesTable {services} on:rename-clicked={(e) => openRenameModale(e.detail.service)} />
			<Dialog.Root open={$dialogOpen} onOpenChange={(state) => { $dialogOpen = state ?? false}}>
				<Dialog.Content class="sm:max-w-[425px]">
					<Dialog.Header>
						<Dialog.Title>Rename service</Dialog.Title>
						<Dialog.Description>Rename your service here.</Dialog.Description>
					</Dialog.Header>
					<RenameServiceForm form={data.form} />
				</Dialog.Content>
			</Dialog.Root>
		{:else}
			<p>No service found</p>
		{/if}
	</CardContent>
</Card>
