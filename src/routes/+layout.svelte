<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { navigating } from "$app/stores";
	import { setInitialClassState } from "$components/ui/light-switch/light-switch";
	import PreloadingIndicator from "$components/ui/preloading-indicator/PreloadingIndicator.svelte";
	import TailwindIndicator from "$components/ui/tailwind-indicator/TailwindIndicator.svelte";
	import MobileSidebar from "$components/layout/MobileSidebar.svelte";

	// Load and initialize drawer store
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<svelte:head>
	<!-- This causes the new eslint-plugin-svelte: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<!-- Visual indicator that something is loading-->
{#if $navigating}
	<PreloadingIndicator />
{/if}

<!-- Show mobile sidebar on small screens-->
<Drawer>
	<MobileSidebar />
</Drawer>
<slot />

<!-- Display screen size in dev mode-->
{#if dev}
    <TailwindIndicator />
{/if}