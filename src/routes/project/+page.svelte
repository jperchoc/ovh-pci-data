<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    $: projects = data.projects;
</script>

{#if projects && projects.length > 0}
<ul>
    {#each projects as project}
    <li>
        <a href="/project/{project.project_id}">{project.description}</a>
    </li>
    {/each}
</ul>
{:else}
    <p>No project found</p>
{/if}