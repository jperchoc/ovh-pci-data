<script lang="ts">
	import type { LayoutData } from "./$types";

    export let data: LayoutData;
    $: user = data.user
</script>

{#if user}
    <a href="/project">See your projects</a>
{:else}
    <a href="/api/auth/login">Login</a>
{/if}


