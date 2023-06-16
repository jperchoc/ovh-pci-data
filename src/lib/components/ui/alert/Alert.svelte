<script lang="ts">
	import type { VariantProps } from "class-variance-authority";
	import { cva } from "class-variance-authority";
	import { cn } from "$lib/utils";

	const alertVariants = cva(
		"relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
		{
			variants: {
				variant: {
					default: "bg-background text-foreground",
					destructive:
						"text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
					success: "bg-success border-success/50 dark:border-success [&>svg]:text-success-foreground text-success-foreground",
					error: "bg-error border-error/50 dark:border-error [&>svg]:text-error-foreground text-error-foreground",
					warning: "bg-warning border-warning/50 dark:border-warning [&>svg]:text-warning-foreground text-warning-foreground",
					info: "bg-info border-info/50 dark:border-info [&>svg]:text-info-foreground text-info-foreground",
				}
			},
			defaultVariants: {
				variant: "default"
			}
		}
	);

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: VariantProps<typeof alertVariants>["variant"] =
		"default";
</script>

<div class={cn(alertVariants({ variant }), className)} {...$$restProps}>
	<slot />
</div>
