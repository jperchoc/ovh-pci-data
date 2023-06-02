<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: job = data.job;
</script>

<a href="/project/{$page.params.projectId}/dataprocessing/job">Retour aux jobs</a>

{#if job}
    <h2>{job.name}</h2>
    <p>{job.status}</p>
{:else}
    <p>job not found</p>
{/if}