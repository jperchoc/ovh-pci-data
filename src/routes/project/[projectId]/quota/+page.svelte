<script lang="ts">
	import { JsonViewer } from "$components";
    import type { PageData } from "./$types";

    export let data: PageData;
    $: quotas = data.quotas;
    $: displayedRegion = data.quotas[0].region;

    //let displayedRegion:string;

    const getQuotaString = (used:number|undefined, max:number|undefined) => {
        if (!used) used = 0;
        if (!max) max = 0;
        const percent = 100*used/max;
        return `${used}/${max} (${percent.toFixed(2)}%)`
    }
</script>

<h2>Quota</h2>
{#each quotas.map(q => q.region) as region}
    <button
        disabled={displayedRegion === region}
        class:active={displayedRegion === region}
        on:click={() => {
            displayedRegion = region
        }}
    >{region}</button>
{/each}
{#each quotas as quota}
<div class="quota-tab" class:shown={displayedRegion === quota.region}>
    <h4>{quota.region}</h4>
    <h5>Instance:</h5>
    <ul>
        <li>Instances: {getQuotaString(quota.instance?.usedInstances, quota.instance?.maxInstances)}</li>
        <li>Cores: {getQuotaString(quota.instance?.usedCores, quota.instance?.maxCores)}</li>
        <li>RAM: {getQuotaString(quota.instance?.usedRAM, quota.instance?.maxRam)}</li>
    </ul>
    <h5>Network</h5>
    <ul>
        <li>Floating ips: {getQuotaString(quota.network?.usedFloatingIPs, quota.network?.maxFloatingIPs)}</li>
        <li>Gateways: {getQuotaString(quota.network?.usedGateways, quota.network?.maxGateways)}</li>
        <li>Networks: {getQuotaString(quota.network?.usedNetworks, quota.network?.maxNetworks)}</li>
        <li>Subnets: {getQuotaString(quota.network?.usedSubnets, quota.network?.maxSubnets)}</li>
    </ul>
    <h5>Load Balancer</h5>
    <ul>
        <li>load balancers: {getQuotaString(quota.loadbalancer?.usedLoadbalancers, quota.loadbalancer?.maxLoadbalancers)}</li>
    </ul>
    <h5>Keymanager</h5>
    <ul>
        <li>Secrets: {getQuotaString(quota.keymanager?.usedSecrets, quota.keymanager?.maxSecrets)}</li>
    </ul>
</div>
{/each}

<style>
    .quota-tab {
        display: none;
    }
    .shown {
        display: block;
    }
    button.active {
        background-color: rgb(40, 65, 207);
        color: #fefefe;
    }
</style>