<script lang="ts">
	import * as Card from '$components/ui/card';
	import Skeleton from '$components/ui/skeleton/skeleton.svelte';
	import * as Table from '$components/ui/table';
	import H2 from '$components/ui/typography/H2.svelte';
	import BillingCard from './BillingCard.svelte';
	import GraphCard from './GraphCard.svelte';
	import QuotaCard from './QuotaCard.svelte';

	export let data;
</script>

<H2 class="mb-4">Dashboard</H2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
	<Card.Root class="min-h-[80px] md:col-span-2">
		<Card.Header>
			<Card.Title>Project {data.project.description}</Card.Title>
		</Card.Header>
		<Card.Content>
			<GraphCard />
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Quotas</Card.Title>
		</Card.Header>
		<Card.Content>
			{#await data.streamed.quotas}
				<Skeleton class="h-8 mb-1" />
				<div class="grid grid-cols-2 gap-1">
					<Skeleton class="h-8" />
					<Skeleton class="h-8" />
					<Skeleton class="h-8" />
					<Skeleton class="h-8" />
				</div>
			{:then quotas}
				<QuotaCard {quotas} />
			{/await}
		</Card.Content>
	</Card.Root>
	{#await data.streamed.billing}
		{#each [...Array(3)] as idx}
			<Card.Root>
				<Card.Header><Skeleton class="h-8" /></Card.Header>
				<Card.Content>
					<div class="flex flex-col gap-1">
						<Skeleton class="h-8" />
						<Skeleton class="h-8" />
						<Skeleton class="h-8" />
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	{:then currentUsage}
		{#if typeof currentUsage === 'object' && 'lastUpdate' in currentUsage}
		<BillingCard title="Databases" usage={currentUsage} resources={['databases']} />
		<BillingCard title="Data processing" usage={currentUsage} resources={['data-processing-job']} />
		<BillingCard
			title="AI"
			usage={currentUsage}
			resources={['ai-training', 'ai-notebook', 'ai-app']}
		/>
		{:else}
		<Card.Root>
			<Card.Header>Billing</Card.Header>
			<Card.Content>
				Current usage:{currentUsage.price.text}
				<Table.Root>
					<Table.Header> 
						<Table.Row>
							<Table.Head>Product</Table.Head>
							<Table.Head class="text-right">Usage</Table.Head>
					  </Table.Row>
					</Table.Header>
					<Table.Body>
						{#each currentUsage.priceByPlanFamily as row}
						<Table.Row>
							<Table.Cell>{row.planFamily}</Table.Cell>
							<Table.Cell class="text-right">{row.price.text}</Table.Cell>
						</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
		{/if}
	{/await}
</div>
