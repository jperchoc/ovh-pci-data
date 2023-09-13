<script lang="ts">
	import Button from "$components/ui/button/button.svelte";
	import * as Card from "$components/ui/card";
	import H1 from "$components/ui/typography/H1.svelte";
	import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";
    
    const conicStops: ConicStop[] = [
		{ label: 'One', color: 'rgba(255,255,255,1)', start: 0, end: 10 },
		{ label: 'Two', color: 'rgba(255,255,255,0.5)', start: 10, end: 35 },
		{ label: 'Three', color: 'rgba(255,255,255,0.25)', start: 35, end: 100 }
];
</script>
<H1>Storage</H1>
<div class="grid grid-cols-2 gap-4 mt-4">
    <Card.Root>
        <Card.Header>Object Storage</Card.Header>
        <Card.Content>
            <ConicGradient stops={conicStops} legend>Random data</ConicGradient>
        </Card.Content>
        <Card.Footer>
            <Button class="w-full">Object storages</Button>
        </Card.Footer>
    </Card.Root>

    <Card.Root>
        <Card.Header>Databases</Card.Header>
        <Card.Content>
            <ConicGradient stops={conicStops} legend>Random data</ConicGradient>
        </Card.Content>
        <Card.Footer>
            <Button class="w-full">Databases</Button>
        </Card.Footer>
    </Card.Root>
</div>
