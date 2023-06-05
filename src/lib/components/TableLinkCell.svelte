<script lang="ts">
    export let linkLabel: string;
    export let href: string | undefined;
    export let subLabel: string | undefined;
</script>

{#if href}
    <a {href}>{linkLabel}</a>
{:else}
    {linkLabel}
{/if}
{subLabel}