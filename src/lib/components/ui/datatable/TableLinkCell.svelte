<script lang="ts">
	import { A, P, Small } from "../typography";

    export let linkLabel: string;
    export let href: string | undefined;
    export let subLabel: string | undefined;
</script>

<div class="flex flex-col space-y-2">
    {#if href}
        <A {href}>{linkLabel}</A>
    {:else}
        <P>{linkLabel}</P>
    {/if}
    <Small>{subLabel}</Small>
</div>