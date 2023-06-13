<script lang="ts">
	import { dev } from "$app/environment";
	import "../app.postcss";
	import { locale } from '$lib/translations/translations';
	import { Button } from "$components/ui/button";
	import type { LayoutData } from "./$types";
	import TailwindIndicator from "$components/base/TailwindIndicator.svelte";
	import Header from "$components/base/Header.svelte";
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { afterNavigate, beforeNavigate } from "$app/navigation";

	NProgress.configure({showSpinner: false});

	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}

	export let data: LayoutData;
	$: user = data.user;

	beforeNavigate(() => {
		NProgress.start();
	});
	afterNavigate(() => {
		NProgress.done();
	});
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