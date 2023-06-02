<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: notebook = data.notebook;
</script>

<a href="/project/{$page.params.projectId}/dataprocessing/notebook">Retour aux jobs</a>

{#if notebook}
    <h2>{notebook.spec.name}</h2>
    <p>{notebook.status.state}</p>
{:else}
    <p>notebook not found</p>
{/if}