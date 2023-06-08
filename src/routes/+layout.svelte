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
<!-- 
<div class="flex justify-between mb-2">
	<div>
<Button variant="outline" on:click={() => changeLanguage('en')}>EN</Button>
<Button variant="outline" on:click={() => changeLanguage('fr')}>FR</Button>
	</div>
{#if user}
<div class="flex items-center gap-2">
	logged as {user.nichandle} 
	<form method="POST" action="/api/auth/logout"><Button type="submit">Logout</Button></form>
</div>
{:else}
<a href="/api/auth/login">Login</a>
{/if}
</div> -->

<div class="relative flex min-h-screen flex-col" id="page">
	<Header />
	<div class="flex-1">
		<slot />
	</div>
	<!-- <SiteFooter /> -->
	{#if dev}
		<TailwindIndicator />
	{/if}
</div>