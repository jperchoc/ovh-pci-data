<script lang="ts">
	import { page } from "$app/stores";
    import { JsonViewer } from "$components/ui/json-viewer";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: notebook = data.notebook;
</script>

<a href="/project/{$page.params.projectId}/data-processing/notebook">Retour aux jobs</a>

{#if notebook}
    <h2>{notebook.spec.name}</h2>
    <p>{notebook.status.state}</p>
    <JsonViewer data={notebook} />
{:else}
    <p>notebook not found</p>
{/if}