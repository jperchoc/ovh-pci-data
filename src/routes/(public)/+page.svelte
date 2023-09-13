<script lang="ts">
	import { Button } from "$components/ui/button";
	import { A, H1 } from "$components/ui/typography";
	import type { LayoutData } from "./$types";

    export let data: LayoutData;
    $: user = data.user
</script>

<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr] px-2 md:px-6 lg:px-10 ">
    <div class="mx-auto w-full min-w-0">

        <H1 class="mb-4">Welcome to PCI-Data project</H1>

        <Button href="/components">Browse components gallery</Button>
        {#if user}
            <Button href="/project">See your projects</Button>
        {:else}
            <Button href="/api/auth/login">Login</Button>
        {/if}


    </div>
</main>