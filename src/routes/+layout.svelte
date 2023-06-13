<script lang="ts">
	import "../app.postcss";
	import { dev } from "$app/environment";
	import { locale } from '$lib/translations/translations';
	import type { LayoutData } from "./$types";
	import TailwindIndicator from "$components/base/TailwindIndicator.svelte";
	import Header from "$components/base/Header.svelte";
	import { navigating } from "$app/stores";
	import PreloadingIndicator from "$components/base/PreloadingIndicator.svelte";
	import { setInitialClassState } from "$components/base/light-switch/light-switch";

	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}

	export let data: LayoutData;
	$: user = data.user;
</script>

<svelte:head>
	<!-- This causes the new eslint-plugin-svelte: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

{#if $navigating}
	<PreloadingIndicator />
{/if}

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