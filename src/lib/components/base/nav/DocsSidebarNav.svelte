<script lang="ts">
	import Separator from "$components/ui/separator/Separator.svelte";
	import type { SidebarNavItem } from "$lib/types/nav";
	import { cn } from "$lib/utils";
	import DocsSidebarNavItems from "./DocsSidebarNavItems.svelte";

	export let items: SidebarNavItem[] = [];
</script>

{#if items.length}
	<div class="w-full">
		{#each items as item, index (index)}
			<div class={cn("pb-4")}>
				<h4 class="mb-1 rounded-md py-1 text-sm font-bold uppercase">
					{item.title}
				</h4>
				{#if item?.items}
					{#if item?.items?.length}
						<DocsSidebarNavItems items={item.items} />
					{/if}
				{/if}
			</div>
			{#if (index < items.length - 1)}
				<Separator class="mb-4" />
			{/if}
		{/each}
	</div>
{/if}