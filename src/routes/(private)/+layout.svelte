<script lang="ts">
	import type { LayoutData } from "../$types";
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from "$components/layout/Header.svelte";
	import Sidebar from "$components/layout/Sidebar.svelte";

	export let data: LayoutData;
	$: user = data.user;

</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<Header showDrawerButton={true} {user} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<main class="px-8 py-8">
		<slot />
	</main>
</AppShell>