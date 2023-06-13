<script lang="ts">
	import { dev } from "$app/environment";
	import "../app.postcss";
	import { locale } from '$lib/translations/translations';
	import { Button } from "$components/ui/button";
	import type { LayoutData } from "./$types";
	import TailwindIndicator from "$components/base/TailwindIndicator.svelte";
	import Header from "$components/base/Header.svelte";

	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}

	export let data: LayoutData;
	$: user = data.user;
</script>

<div class="relative flex min-h-screen flex-col bg-pagebg" id="page">
	<Header {user} />
	<div class="flex-1">
		<slot />
	</div>
	<!-- <SiteFooter /> -->
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>