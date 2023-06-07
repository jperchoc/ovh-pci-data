<script lang="ts">
	import "../app.postcss";
	import { locale } from '$lib/translations/translations';
	import { Button } from "$components/ui/button";
	import type { LayoutData } from "./$types";

	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}

	export let data: LayoutData;
	$: user = data.user;
</script>

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
</div>

<slot />