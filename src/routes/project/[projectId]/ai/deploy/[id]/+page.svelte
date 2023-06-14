<script lang="ts">
	import { page } from "$app/stores";
    import { JsonViewer } from "$components/ui/json-viewer";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: app = data.app;
</script>

<a href="/project/{$page.params.projectId}/ai/deploy">Retour aux apps</a>

{#if app}
    <h2>{app.spec.name}</h2>
    <p>{app.spec.image}</p>
    <p>{app.status.url}</p>
    <JsonViewer data={app} />
{:else}
    <p>App not found</p>
{/if}