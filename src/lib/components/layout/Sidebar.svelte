<script lang="ts">
	import navLinks from "$stores/navbar";
	import { getDrawerStore } from "@skeletonlabs/skeleton";
	import { projectIdStore, projectsStore } from "$stores/projectsStore";
	import { goto } from "$app/navigation";
	import { page } from '$app/stores';  
	import type { NavItem } from "$types/nav";

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	const disabledLinkClass = 'text-gray-500 pointer-events-none';

	const getItemClass = (item: NavItem, currentUrl:string) => {
		if (item.disabled) return disabledLinkClass;
		if (!item.link) return 'cursor-default opacity-50';
		if (item.activeExact) {
			if (currentUrl === item.link) return 'bg-primary';
		} else {
			if (currentUrl.startsWith(item.link)) return 'bg-primary';
		}
	}

	const handleProjectChange = () => {
		const newRoute = $page.route.id?.replace('/(private)','').replace('[projectId]', `${$projectIdStore}`);
		goto(newRoute ? newRoute : `/project/${$projectIdStore}`);
		drawerStore.close();
	}

</script>

<nav class="list-nav p-4">
	{#if $projectsStore.length > 0}
		<select class="select mb-2" bind:value={$projectIdStore} on:change={() => handleProjectChange()}>
			{#each $projectsStore as project}
				<option value={project.project_id}>{project.description}</option>
			{/each}
		</select>
	{/if}
	<ul>
		{#each $navLinks as item}
			<li>
				<a data-sveltekit-preload-data="tap" href={item.link} class={getItemClass(item, $page.url.pathname)} on:click={drawerClose}>{item.label}</a>
				<ul class="ml-4 border-l-[1px]">
				{#each item.items as sublink}
					<li>
						<a data-sveltekit-preload-data="tap" href={sublink.link} class={getItemClass(sublink, $page.url.pathname)} on:click={drawerClose}>{sublink.label}</a>
					</li>
				{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>