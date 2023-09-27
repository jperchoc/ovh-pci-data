<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import ServicesTable from '$components/pages/databases/table/ServicesTable.svelte';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import type { ovhapi } from '$types/ovh';
	import type { PageData } from './$types';
	import * as Dialog from '$components/ui/dialog';
	import RenameServiceForm from '$components/pages/databases/rename-service/RenameServiceForm.svelte';
	import Alert from '$components/ui/alert/alert.svelte';
	import { writable } from 'svelte/store';
	import { Check, X } from 'lucide-svelte';

	export let data: PageData;

	const pageMessages = writable<string[]>([]);
	let renameError: string | null;
	let dialogOpen = false;

	$: services = data.dbServices;

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

	const openRenameModale = (item: ovhapi.cloud.project.database.Service) => {
		const serviceToUpdate = services.find((s) => s.id === item.id);
		if (!serviceToUpdate) return;
		dialogOpen = true;
		data.form.data.description = serviceToUpdate.description;
		data.form.data.id = serviceToUpdate.id;
		data.form.data.engine = serviceToUpdate.engine;
	};

	function removeMessage(idx: number): void {
		$pageMessages.splice(idx, 1);
		$pageMessages = [...$pageMessages];
	}
</script>

{#each $pageMessages as message, idx}
	<Alert class="mb-2 bg-green-100 text-green-800" variant="default">
		<div class="flex">
			<div class="flex-1">
				<Check class="border rounded-full bg-green-800 text-green-100 inline-block w-4 h-4" />
				<span>{message}</span>
			</div>
			<button type="button" on:click={() => removeMessage(idx)} aria-label="close"
				><X class="w-4 h-4" /></button
			>
		</div>
	</Alert>
{/each}
<Card>
	<CardHeader>
		<h2 class="font-bold text-xl">Databases</h2>
	</CardHeader>
	<CardContent class="p-0 pb-4">
		{#if services}
			<ServicesTable {services} on:rename-clicked={(e) => openRenameModale(e.detail.service)} />
			<Dialog.Root bind:open={dialogOpen}>
				<Dialog.Content class="sm:max-w-[425px]">
					<Dialog.Header>
						<Dialog.Title>Rename service</Dialog.Title>
						<Dialog.Description>Rename your service here.</Dialog.Description>
					</Dialog.Header>
					{#if renameError}
						<Alert variant="destructive">{renameError}</Alert>
					{/if}
					<RenameServiceForm
						form={data.form}
						on:submit={() => {
							renameError = null;
						}}
						on:success={() => {
							$pageMessages = [...$pageMessages, 'Your service has been renamed'];
							dialogOpen = false;
							renameError = null;
						}}
						on:error={(e) => {
							renameError = `An error occured while renaming your service${
								e.detail.error ? `: ${e.detail.error.message} (${e.detail.error.status})` : ''
							}`;
						}}
					/>
				</Dialog.Content>
			</Dialog.Root>
		{:else}
			<p>No service found</p>
		{/if}
	</CardContent>
</Card>
