<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;

    $: jobs = data.jobs;
</script>

<h2>Jobs</h2>
{#if jobs && jobs.length > 0}
<ul>
    {#each jobs as job}
     <li>
        <a href="/project/{$page.params.projectId}/dataprocessing/job/{job.id}">{job.name}</a>
    </li>   
    {/each}
</ul>
{:else}
    <p>Aucun job</p>
{/if}