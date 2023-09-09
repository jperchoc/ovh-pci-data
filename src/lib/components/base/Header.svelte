<script lang="ts">
	import Avatar from "$components/ui/avatar/avatar.svelte";
	import AvatarFallback from "$components/ui/avatar/avatar-fallback.svelte";
	import { Button } from "$components/ui/button";
	import LightSwitch from "$components/ui/light-switch/LightSwitch.svelte";
	import type { ovhapi } from "$types/ovh";
	import MainNav from "./nav/MainNav.svelte";
	import MobileNav from "./nav/MobileNav.svelte";
	import { locale } from '$lib/translations/translations';

	export let user: ovhapi.nichandle.Nichandle | null;
	let avatarInitials = '';
	$: {
		if (user) {
			if (user.firstname && user.name) {
				avatarInitials = `${user.firstname[0]}${user.name[0]}`;
			} else {
				avatarInitials = user.nichandle.slice(0, 2).toUpperCase();
			}
		}
	}
	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}
</script>

<header
	class="px-2 md:px-8 supports-backdrop-blur:bg-headerbg/60 sticky top-0 z-40 w-full border-b bg-headerbg/95 shadow-sm backdrop-blur"
>
	<div class="flex h-14 items-center">
		<MainNav />
		<MobileNav />
		<div
			class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
		>
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<!-- Command Menu Here -->
			</div>
			<nav class="flex items-center space-x-1">
				<Button on:click={() => changeLanguage('en')}>EN</Button>
				<Button on:click={() => changeLanguage('fr')}>FR</Button>
				<LightSwitch />
				{#if user}
				<Avatar>
					<AvatarFallback>{avatarInitials}</AvatarFallback>
				</Avatar>
				{/if}
			</nav>
		</div>
	</div>
</header>