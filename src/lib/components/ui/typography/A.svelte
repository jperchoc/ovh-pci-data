<script lang="ts">
	import { cn } from "$lib/utils";
    let className: string | undefined | null = undefined;
    export let href: string;
	export { className as class };
</script>

<a
    class={cn(
        "underline underline-offset-4 hover:text-primary",
        className
    )}
    {href}
    {...$$restProps}
>
    <slot />
</a>