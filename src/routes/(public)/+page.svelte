<script lang="ts">
	import { Button } from "$components/ui/button";
	import { H1 } from "$components/ui/typography";
	import type { LayoutData } from "./$types";

    export let data: LayoutData;
    $: user = data.user
</script>

<H1 class="mb-4">Welcome to PCI-Data project</H1>

{#if user}
    <Button href="/project">See your projects</Button>
    <form action="/api/auth/logout" method="post" class="inline-block">
        <Button type="submit">Logout</Button>
    </form>
{:else}
    <Button href="/api/auth/login">Login</Button>
{/if}
