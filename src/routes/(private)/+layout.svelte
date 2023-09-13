<script lang="ts">
	import type { LayoutData } from "../$types";
	import { page } from "$app/stores";
	import { AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { LayoutDashboard, Database, Cpu, Brain } from 'lucide-svelte';
	import Header from "$components/layout/Header.svelte";

	export let data: LayoutData;
	$: user = data.user;

	let currentTile: number = 0;
	// Disable left sidebar on homepage
	$: isPrivatePage = $page.route.id?.startsWith('/(private)');
	$: slotSidebarLeft = isPrivatePage ? 'bg-surface-50-900-token lg:w-auto' : 'w-0';
</script>





<AppShell {slotSidebarLeft}>
	<svelte:fragment slot="header">
		
		<!-- <AppBar shadow="shadow-2xl"> -->
			<Header />
		<!-- </AppBar> -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
			<AppRail background="bg-transparent" border="border-r border-surface-500/30">
				<AppRailAnchor href="#" title="Dashboard" selected={$page.route.id === "/(private)/project/[projectId]"}>
					<svelte:fragment slot="lead"><LayoutDashboard/></svelte:fragment>
					<span>Dashboard</span>
				</AppRailAnchor>
				<!-- --- -->
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
					<div class="flex flex-col justify-center items-center space-y-1">
						<Database/>
						<span>Storage</span>
					</div>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
					<div class="flex flex-col justify-center items-center space-y-1">
						<Cpu />
						<span>Data processing</span>
					</div>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3" selected={$page.route.id?.startsWith("/(private)/project/[projectId]/ai")}>
					<div class="flex flex-col justify-center items-center space-y-1">
						<Brain />
						<span>AI</span>
					</div>
				</AppRailTile>
				<!-- --- -->
				<!-- <svelte:fragment slot="trail">
					<AppRailAnchor href="/settings" title="Settings" selected={$page.route.id === "/(private)/settings"}>
						<svelte:fragment slot="lead"><Settings /></svelte:fragment>
						<span>Settings</span>
					</AppRailAnchor>
				</svelte:fragment> -->
			</AppRail>
			{#if currentTile !== null}
			<section class="p-4 pb-20 space-y-4 overflow-y-auto">
				<p class="font-bold pl-4 text-2xl">Products</p>
				<nav class="list-nav">
					<ul>
						{#if currentTile === 0}
						<li><a href="#"><span class="flex-auto">Object Storage</span></a></li>
						<li><a href="#"><span class="flex-auto">Databases</span></a></li>
						{:else if currentTile === 1}
						<li><a href="#"><span class="flex-auto">Jobs</span></a></li>
						<li><a href="#"><span class="flex-auto">Notebooks</span></a></li>
						<li><a href="#"><span class="flex-auto">Data integration</span><span class="badge variant-filled-secondary">New</span></a></li>
						{:else if currentTile === 2}
						<li><a href="#"><span class="flex-auto">Dashboard</span></a></li>
						<li><a href="#"><span class="flex-auto">Notebooks</span></a></li>
						<li><a href="#"><span class="flex-auto">Jobs</span></a></li>
						<li><a href="#" class="bg-primary-active-token"><span  class="flex-auto">Deploy</span></a></li>
						{/if}
					</ul>
			</section>
			{/if}
	</div>
	</svelte:fragment>
	<main class="px-8 py-2">
		<slot />
	</main>
</AppShell>