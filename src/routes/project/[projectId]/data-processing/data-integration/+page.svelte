<script lang="ts">
	import { t } from '$lib/translations/translations';
	import { Card, CardContent, CardHeader } from "$components/ui/card";
	import { writable, type Writable } from "svelte/store";
	import type { PageData } from "./$types";
	import WorkflowsTable from "./WorkflowsTable.svelte";
	import type { ovhapi } from "$types/ovh";
	import { page } from "$app/stores";
	import WorkflowsJobsTable from "./WorkflowsJobsTable.svelte";
	import { H1, H2, P } from '$components/ui/typography';
	import { Alert } from '$components/ui/alert';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { POLLING_INTERVAL } from '$lib/global.constants';

    export let data: PageData;
    let selectedWorkflow: Writable<ovhapi.cloud.project.dataIntegration.Workflow> = writable();
	let jobs: ovhapi.cloud.project.dataIntegration.Job[] = [];
	let loadingJobs = false;

    $: workflows = data.workflows;
    $: if ($selectedWorkflow?.id) {
        loadingJobs = true;
        fetch(`/api/ovh/cloud/project/${$page.params.projectId}/dataIntegration/workflows/${$selectedWorkflow.id}/jobs`)
        .then(res => res.json())
        .then(data => jobs = data || [])
        .finally(() => {
			loadingJobs = false;
			setTimeout(() => {
				const anchor = document.getElementById('test')
				window.scrollTo({
					top: anchor?.scrollHeight,
					behavior: 'smooth'
				})
			}, 200)
		});
    }

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataIntegration/workflows`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});

</script>
<H1>{$t('dataprocessing.dataIntegration.list.header')}</H1>
<P class="mb-4">{$t('dataprocessing.dataIntegration.list.description')}</P>

<Card>
	<CardHeader>
		<H2>Workflows</H2>
	</CardHeader>
	<CardContent>
		{#if workflows.length > 0}
			<WorkflowsTable {workflows} {selectedWorkflow} />
		{:else}
			<Alert variant="info">{$t('dataprocessing.dataIntegration.list.no_workflow_message')}</Alert>
		{/if}
	</CardContent>
</Card>

{#if $selectedWorkflow}
	<Card class="mt-2">
		<CardHeader>
			<H2>{$selectedWorkflow.name} - Jobs</H2>
		</CardHeader>
		<CardContent id="test">
			{#if loadingJobs}
				<P>{$t('dataprocessing.dataIntegration.list.loading_jobs')}</P>
			{:else if jobs.length > 0}
				<WorkflowsJobsTable {jobs}/>
			{:else}
				<P>{$t('dataprocessing.dataIntegration.list.no_job_message')}</P>
			{/if}
		</CardContent>
	</Card>
{:else}
	<Card class="mt-2">
		<CardHeader>
			<H2>Jobs</H2>
		</CardHeader>
		<CardContent>
			<Alert variant="info">{$t('dataprocessing.dataIntegration.list.click_workflow_message')}</Alert>
		</CardContent>
	</Card>
{/if}