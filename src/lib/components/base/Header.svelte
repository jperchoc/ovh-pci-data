<script lang="ts">
	import Avatar from "$components/ui/avatar/Avatar.svelte";
	import AvatarFallback from "$components/ui/avatar/AvatarFallback.svelte";
	import LightSwitch from "$components/ui/light-switch/LightSwitch.svelte";
	import MainNav from "./nav/MainNav.svelte";
	import MobileNav from "./nav/MobileNav.svelte";

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