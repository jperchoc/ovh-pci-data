<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: apps = data.apps;
</script>

<h2>Apps</h2>
{#if apps}
    <ul>
        {#each apps as app}    
            <li>
                <a href="/project/{$page.params.projectId}/ai/deploy/{app.id}">{app.spec.name}</a>
            </li>
        {/each}
    </ul>
{:else}
<p>No app found</p>
{/if}