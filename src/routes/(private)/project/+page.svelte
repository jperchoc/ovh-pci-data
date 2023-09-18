<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

	import { projectIdStore } from "$stores/projectsStore";
	import type { LayoutData } from "./$types";

    export let data: LayoutData;

    $: if (browser && $projectIdStore) {
        goto(`/project/${$projectIdStore}`);
    }
</script>

{#if data.projects.length === 0 }
    Vous n'avez pas de project Cloud
{:else}
    Chargement du dashboard de votre project...
{/if}