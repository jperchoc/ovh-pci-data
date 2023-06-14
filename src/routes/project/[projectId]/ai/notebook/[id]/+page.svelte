<script lang="ts">
	import { page } from "$app/stores";
    import { JsonViewer } from "$components/ui/json-viewer";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: notebook = data.notebook;
</script>

<a href="/project/{$page.params.projectId}/ai/notebook">Retour aux notebooks</a>

{#if notebook}
    <h2>{notebook.spec.name}</h2>
    <p>{notebook.status.url}</p>
    <JsonViewer data={notebook} />
{:else}
    <p>Notebook not found</p>
{/if}