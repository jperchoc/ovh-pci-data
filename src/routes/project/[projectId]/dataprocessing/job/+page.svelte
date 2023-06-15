<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import { t } from '$lib/translations/translations';
	import JobsTable from './JobsTable.svelte';

	export let data: PageData;

	$: jobs = data.jobs;

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataProcessing/jobs`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});
</script>


<Card>
	<CardHeader>
		<h2 class="font-bold text-xl">{$t('dataprocessing.job.list.header')}</h2>
	</CardHeader>
	<CardContent class="p-0 pb-4">
		{#if jobs.length > 0}
			<JobsTable {jobs} />
		{:else}
			<p>{$t('dataprocessing.job.list.no-job')}</p>
		{/if}
	</CardContent>
</Card>
