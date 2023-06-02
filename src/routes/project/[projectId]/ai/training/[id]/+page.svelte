<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: training = data.training;
</script>

<a href="/project/{$page.params.projectId}/ai/training">Retour aux trainings</a>

{#if training}
    <h2>{training.spec.name}</h2>
    <p>{training.status.url}</p>
{:else}
    <p>training not found</p>
{/if}