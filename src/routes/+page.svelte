<script lang="ts">
	import type { LayoutData } from "./$types";

    export let data: LayoutData;
    $: user = data.user
</script>

<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to PCI-Data project</h1>

{#if user}
    <a href="/project">See your projects</a>
{:else}
    <a href="/api/auth/login">Login</a>
{/if}


