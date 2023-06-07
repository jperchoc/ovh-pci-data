<script lang="ts">
    export let linkLabel: string;
    export let href: string | undefined;
    export let subLabel: string | undefined;
</script>

<div class="link-cell">
    {#if href}
        <a {href}>{linkLabel}</a>
    {:else}
        {linkLabel}
    {/if}
    <small>{subLabel}</small>
</div>

<style>
    .link-cell {
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>