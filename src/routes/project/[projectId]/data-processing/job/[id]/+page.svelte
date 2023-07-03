<script lang="ts">
	import { page } from "$app/stores";
    import { JsonViewer } from "$components/ui/json-viewer";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: job = data.job;
</script>

<a href="/project/{$page.params.projectId}/data-processing/job">Retour aux jobs</a>

{#if job}
    <h2>{job.name}</h2>
    <p>{job.status}</p>
    <JsonViewer data={job} />
{:else}
    <p>job not found</p>
{/if}