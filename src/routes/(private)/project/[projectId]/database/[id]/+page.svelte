<script lang="ts">
	import { page } from "$app/stores";
    import { JsonViewer } from "$components/ui/json-viewer";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: service = data.service;
</script>

<a href="/project/{$page.params.projectId}/database">Retour aux service</a>

{#if service}
    <h2>{service.description}</h2>
    <p>{service.status}</p>
    <p>{service.engine}</p>
    <JsonViewer data={service} />
{:else}
    <p>service not found</p>
{/if}