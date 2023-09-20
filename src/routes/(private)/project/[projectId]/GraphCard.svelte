<script lang="ts">
	import { projectIdStore } from "$stores/projectsStore";
	import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";

    let loading = true;
    const loadingConicStops: ConicStop[] = [
        { color: 'transparent', start: 0, end: 25 },
        { color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
    ];
    const conicStops: ConicStop[] = []
    $: {
        if ($projectIdStore) {
            setTimeout(() => {
                const nbItems = randomIntFromInterval(2, 5);
                for (let i = 0; i < nbItems; i++) {
                    conicStops.push({
                        label:`items type ${i+1}`,
                        color: `rgb(var(--color-primary-${i+3}00))`, start: i * (100 / nbItems), end: ( (i+1) * (100 / nbItems))
                    })
                }
                loading = false;
                console.log(conicStops)
            }, Math.random()*1000)
        }
    }
    const randomIntFromInterval = (min: number, max: number) =>  Math.floor(Math.random() * (max - min + 1) + min);
</script>

{#if loading}
    <ConicGradient stops={loadingConicStops} spin>Loading</ConicGradient>
{:else}
<ConicGradient stops={conicStops} legend></ConicGradient>

{/if}