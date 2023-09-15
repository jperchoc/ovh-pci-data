<script lang="ts">
	import type { LayoutData } from "../$types";
	import Header from "$components/layout/Header.svelte";
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data: LayoutData;
	$: user = data.user;
</script>

<AppShell>
	<svelte:fragment slot="header">
			<Header {user} />
	</svelte:fragment>
	<main class="px-8 py-8">
		<slot />
	</main>
</AppShell>