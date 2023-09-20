<script lang="ts">
	import type { ovhapi } from "$types/ovh";
	import QuotaDetails from "./QuotaDetails.svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";

    export let quotas: ovhapi.cloud.quota.Quotas[];
    let selectedRegion: string;

    $: selectedRegion = quotas[0].region;
    $: selectedQuota = quotas.find(q => q.region === selectedRegion);

    function handleSelectChange(event: Event) {
        selectedRegion = (event.target as HTMLSelectElement).value;
    }

</script>

{#if quotas && quotas.length > 0 && selectedQuota}
    <select class="select mb-2" value={selectedRegion} on:change={handleSelectChange}>
        {#each quotas as quota}
            <option value={quota.region}>{quota.region}</option>
        {/each}
    </select>
    <QuotaDetails quota={selectedQuota} />
{:else}
    <ProgressRadial />
{/if}