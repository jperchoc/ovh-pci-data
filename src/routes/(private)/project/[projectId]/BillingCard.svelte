<script lang="ts">
	import type { ovhapi } from '$types/ovh';
	import Button from '$components/ui/button/button.svelte';
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { CaretSort } from 'radix-icons-svelte';
	import Skeleton from '$components/ui/skeleton/skeleton.svelte';

	export let title: string;
	export let loading = false;
    export let usage: ovhapi.cloud.usage.UsageCurrent;
    export let resources: string[];

    $: typedResources = getTypedResources(usage, resources);
	$: total = typedResources.map((u) => u.totalPrice).reduce((acc, curr) => acc + curr, 0);

	type ResourceLine = ovhapi.cloud.billingView.Component & {
		region: string;
	};
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
	const getResourceLine = (resources: ovhapi.cloud.billingView.RegionalizedResource[]) => {
		return resources.reduce(
			(acc: ResourceLine[], resource) => [
				...acc,
				...resource.components.map((component) => ({ region: resource.region, ...component }))
			],
			[]
		);
	};
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			<span>{title}</span>
			{#if loading}
				<Skeleton class="h-2" />
			{:else}
				({total.toFixed(2)} €)
			{/if}
		</Card.Title>
	</Card.Header>
	<Card.Content>
		{#if loading}
			<div class="flex flex-col gap-1">
				<Skeleton class="h-8" />
				<Skeleton class="h-8" />
				<Skeleton class="h-8" />
			</div>
		{:else}
			<div class="flex flex-col gap-1">
				{#each typedResources as typedResource}
					<div class="rounded-md border hover:bg-secondary-500">
						<Collapsible.Root>
							<Collapsible.Trigger asChild let:builder>
								<div
									use:builder.action
									{...builder}
									class="rounded-md flex items-center justify-between space-x-4 px-4 cursor-pointer"
								>
									<h4 class="text-sm font-semibold">{typedResource.type} ({typedResource.totalPrice.toFixed(2)} €)</h4>
									<Button variant="ghost" size="sm" class="w-9 p-0">
										<CaretSort class="h-4 w-4" />
										<span class="sr-only">Toggle</span>
									</Button>
								</div>
							</Collapsible.Trigger>
							<Collapsible.Content class="px-4 pb-2">
								{#if typedResource.resources.length === 0}
									<p>No usage</p>
								{:else}
									<div class="bg-card">
										<Table.Root>
											<Table.Caption>Votre consommation pour {typedResource.type}</Table.Caption>
											<Table.Header>
												<Table.Row>
													<Table.Head>Region</Table.Head>
													<Table.Head>Type</Table.Head>
													<Table.Head>Consommation</Table.Head>
													<Table.Head>Prix</Table.Head>
												</Table.Row>
											</Table.Header>
											<Table.Body>
												{#each getResourceLine(typedResource.resources) as resourceLine}
													<Table.Row>
														<Table.Cell>{resourceLine.region}</Table.Cell>
														<Table.Cell>{resourceLine.name}</Table.Cell>
														<Table.Cell
															>{resourceLine.quantity.value} {resourceLine.quantity.unit}
														</Table.Cell>
														<Table.Cell>{resourceLine.totalPrice.toFixed(2)} €</Table.Cell>
													</Table.Row>
												{/each}
											</Table.Body>
										</Table.Root>
									</div>
								{/if}
							</Collapsible.Content>
						</Collapsible.Root>
					</div>
				{/each}
			</div>
		{/if}
	</Card.Content>
</Card.Root>
