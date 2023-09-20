<script lang="ts">
	import * as Card from '$components/ui/card';
	import H2 from '$components/ui/typography/H2.svelte';
	import type { PageData } from './$types';
	import BillingCard from './BillingCard.svelte';
	import GraphCard from './GraphCard.svelte';
	import QuotaCard from './QuotaCard.svelte';

	export let data: PageData;
	$: project = data.project;
    $: usage = data.billing;

</script>

<H2 class="mb-4">{project.description}</H2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-2">
	<Card.Root class="min-h-[80px] md:col-span-2">
		<Card.Header>
			<Card.Title>Project {project.description}</Card.Title>
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
			<QuotaCard quotas={data.quotas} />
		</Card.Content>
	</Card.Root>
    <BillingCard
		title="Databases"
		loading={!usage}
        usage={usage}
        resources={['databases']}
	/>
	<BillingCard
		title="Data processing"
		loading={!usage}
        usage={usage}
        resources={['data-processing-job']}
	/>
	<BillingCard
		title="AI"
		loading={!usage}
        usage={usage}
        resources={['ai-training', 'ai-notebook', 'ai-app']}
	/>
</div>
