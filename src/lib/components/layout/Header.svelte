<script lang="ts">
	export let showDrawerButton:boolean = false;
	export let user: ovhapi.nichandle.Nichandle | null = null;

	import * as Avatar from "$components/ui/avatar";
	import LightSwitch from "$components/ui/light-switch/LightSwitch.svelte";
	import type { ovhapi } from "$types/ovh";
	import { AppBar, getDrawerStore } from "@skeletonlabs/skeleton";
	
	const drawerStore = getDrawerStore();
    function drawerOpen(): void {
        drawerStore.open({});
    }

	let avatarInitials = '';
	$: {
		if (user) {
			const { firstname, name, nichandle } = user;
			avatarInitials = (firstname && name) ? `${firstname[0]}${name[0]}` : nichandle.slice(0, 2).toUpperCase();
		}
	}
    
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" shadow="shadow-2xl">
    <svelte:fragment slot="lead">
		<div class="flex items-center">
			{#if showDrawerButton}
			<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
				<span>
					<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
						<rect width="100" height="20" />
						<rect y="30" width="100" height="20" />
						<rect y="60" width="100" height="20" />
					</svg>
				</span>
			</button>
			{/if}
			<strong class="text-xl uppercase">DataWarehouse</strong>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		{#if user}
			<Avatar.Root>
				<Avatar.Fallback>{avatarInitials}</Avatar.Fallback>
			</Avatar.Root>
		{/if}
	</svelte:fragment>
</AppBar>