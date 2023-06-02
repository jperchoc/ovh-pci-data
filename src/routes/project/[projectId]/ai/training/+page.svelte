<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    $: trainings = data.trainings;
</script>

<h2>Training</h2>
{#if trainings}
    <ul>
        {#each trainings as training}    
            <li>
                <a href="/project/{$page.params.projectId}/ai/training/{training.id}">{training.spec.name}</a>
            </li>
        {/each}
    </ul>
{:else}
<p>No trainings found</p>
{/if}