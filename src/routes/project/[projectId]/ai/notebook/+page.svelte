<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: notebooks = data.notebooks;
</script>

<h2>Notebooks</h2>
{#if notebooks}
    <ul>
        {#each notebooks as notebook}    
            <li>
                <a href="/project/{$page.params.projectId}/ai/notebook/{notebook.id}">{notebook.spec.name}</a>
            </li>
        {/each}
    </ul>
{:else}
<p>No notebook found</p>
{/if}