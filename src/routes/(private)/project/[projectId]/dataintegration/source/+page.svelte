<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import { t } from '$lib/translations/translations';
	import SourcesTable from './SourcesTable.svelte';


	export let data: PageData;
	$: sources = data.sources;

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataIntegration/sources`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});
</script>
<!--
<Card>
	<CardHeader>
		<h2 class="font-bold text-xl">{$t('dataintegration.workflow.list.header')}</h2>
	</CardHeader>
	<CardContent class="p-0 pb-4">
		<SourcesTable {sources}/>
	</CardContent>
</Card>
-->