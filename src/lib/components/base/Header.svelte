<script lang="ts">
	import Avatar from "$components/ui/avatar/Avatar.svelte";
	import AvatarFallback from "$components/ui/avatar/AvatarFallback.svelte";
	import { Button } from "$components/ui/button";
	import LightSwitch from "$components/ui/light-switch/LightSwitch.svelte";
	import type { ovhapi } from "$types/ovh";
	import MainNav from "./nav/MainNav.svelte";
	import MobileNav from "./nav/MobileNav.svelte";
	import { locale } from '$lib/translations/translations';
	import { Tabs, TabsList, TabsTrigger } from "$components/ui/tabs";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

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
		if (browser) {
			localStorage.setItem('lang', lang);
			locale.set(lang);
		}
	}

	let settedLocale: string;

	onMount(() => {
		settedLocale = locale.get();
	})

	$: changeLanguage(settedLocale);
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
				<Tabs bind:value={settedLocale} class="max-w-[400px]">
					<TabsList>
						<TabsTrigger value="fr">Français</TabsTrigger>
						<TabsTrigger value="en">English</TabsTrigger>
					</TabsList>
				</Tabs>
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