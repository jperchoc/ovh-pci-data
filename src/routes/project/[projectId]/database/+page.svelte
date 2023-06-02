<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;

    $: dbServices = data.dbServices;
</script>

<h2>Databases</h2>
{#if dbServices && dbServices.length > 0}
<ul>
    {#each dbServices as service}
     <li>
        <a href="/project/{$page.params.projectId}/database/{service.id}">{service.description}</a>
    </li>   
    {/each}
</ul>
{:else}
    <p>Aucun service</p>
{/if}