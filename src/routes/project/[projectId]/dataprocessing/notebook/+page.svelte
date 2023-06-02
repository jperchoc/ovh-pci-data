<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;

    $: notebooks = data.notebooks;
</script>

<h2>Notebooks Spark</h2>
{#if notebooks && notebooks.length > 0}
<ul>
    {#each notebooks as notebook}
     <li>
        <a href="/project/{$page.params.projectId}/dataprocessing/notebook/{notebook.id}">{notebook.spec.name}</a>
    </li>   
    {/each}
</ul>
{:else}
    <p>Aucun notebook</p>
{/if}