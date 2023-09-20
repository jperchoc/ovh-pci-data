<script lang="ts">
	import * as Card from '$components/ui/card';
	import Progress from '$components/ui/progress/progress.svelte';
	import H4 from '$components/ui/typography/H4.svelte';
	import type { ovhapi } from '$types/ovh';

	export let quota: ovhapi.cloud.quota.Quotas;
</script>

<div class="grid-cols-2 grid gap-2">
	<div class="space-y-1">
		<H4>Volume</H4>
		<Progress value={quota.volume?.volumeCount} max={quota.volume?.maxVolumeCount} />
		<Progress value={quota.volume?.volumeBackupCount} max={quota.volume?.maxVolumeBackupCount} />
		<Progress value={quota.volume?.usedBackupGigabytes} max={quota.volume?.maxBackupGigabytes} />
		<Progress value={quota.volume?.usedGigabytes} max={quota.volume?.maxGigabytes} />
	</div>
	<div class="space-y-1">
		<H4>Network</H4>
		<Progress value={quota.network?.usedFloatingIPs} max={quota.network?.maxFloatingIPs} />
		<Progress value={quota.network?.usedGateways} max={quota.network?.maxGateways} />
		<Progress value={quota.network?.usedNetworks} max={quota.network?.maxNetworks} />
		<Progress value={quota.network?.usedSubnets} max={quota.network?.maxSubnets} />
	</div>
	<div class="space-y-1">
		<H4>Load balancers</H4>
		<Progress value={quota.loadbalancer?.usedLoadbalancers} max={quota.loadbalancer?.maxLoadbalancers} />
	</div>
	<div class="space-y-1">
		<H4>Key Managers</H4>
		<Progress value={quota.keymanager?.usedSecrets} max={quota.keymanager?.maxSecrets} />
	</div>
	<div class="space-y-1">
		<H4>Instances</H4>
		<Progress value={quota.instance?.usedCores} max={quota.instance?.maxCores} />
		<Progress value={quota.instance?.usedRAM} max={quota.instance?.maxRam} />
		<Progress value={quota.instance?.usedInstances} max={quota.instance?.maxInstances} />
	</div>
</div>
