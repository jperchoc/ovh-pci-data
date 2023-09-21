<script lang="ts">
	import * as Card from '$components/ui/card';
	import Skeleton from '$components/ui/skeleton/skeleton.svelte';
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
		<BillingCard title="Databases" usage={currentUsage} resources={['databases']} />
		<BillingCard title="Data processing" usage={currentUsage} resources={['data-processing-job']} />
		<BillingCard
			title="AI"
			usage={currentUsage}
			resources={['ai-training', 'ai-notebook', 'ai-app']}
		/>
	{/await}
</div>
