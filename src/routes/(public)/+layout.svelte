<script lang="ts">
	import type { LayoutData } from "../$types";
	import Header from "$components/base/Header.svelte";
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	export let data: LayoutData;
	$: user = data.user;
</script>

<AppShell>
	<svelte:fragment slot="header">
		
		<AppBar shadow="shadow-2xl">
			<Header {user} />
		</AppBar>
	</svelte:fragment>
	<main class="px-8 py-2">
		<slot />
	</main>
</AppShell>