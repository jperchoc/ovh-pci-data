<script lang="ts">
	import type { ovhapi } from '$types/ovh';
	import Button from '$components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { CaretSort } from 'radix-icons-svelte';
	import BillingTable from './BillingTable.svelte';

	export let title: string;
	export let usage: ovhapi.cloud.usage.UsageCurrent;
	export let resources: string[];

	$: typedResources = getTypedResources(usage, resources);
	$: total = typedResources.map((u) => u.totalPrice).reduce((acc, curr) => acc + curr, 0);

	
	const getTypedResources = (
		usage: ovhapi.cloud.usage.UsageCurrent,
		types: string[]
	): ovhapi.cloud.billingView.TypedResources[] => {
		if (!usage) return [];
		return types.map(
			(t) =>
				usage.resourcesUsage?.find((r) => r.type === t) ?? {
					type: t,
					totalPrice: 0,
					resources: []
				}
		);
	};
	
    
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			<span>{title} {total.toFixed(2)} €</span>
		</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col gap-1">
			{#each typedResources as typedResource}
				<div class="rounded-md border hover:bg-primary-500/10">
					<Collapsible.Root>
						<Collapsible.Trigger asChild let:builder>
							<div
								use:builder.action
								{...builder}
								class="rounded-md flex items-center justify-between space-x-4 px-4 cursor-pointer"
							>
								<h4 class="text-sm font-semibold">
									{typedResource.type} ({typedResource.totalPrice.toFixed(2)} €)
								</h4>
								<Button variant="ghost" size="sm" class="w-9 p-0">
									<CaretSort class="h-4 w-4" />
									<span class="sr-only">Toggle</span>
								</Button>
							</div>
						</Collapsible.Trigger>
						<Collapsible.Content>
							{#if typedResource.resources.length === 0}
								<p class="px-4 pb-2">No usage</p>
							{:else}
								<BillingTable resources={typedResource.resources} />
							{/if}
						</Collapsible.Content>
					</Collapsible.Root>
				</div>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
