import { tv, type VariantProps } from "tailwind-variants";

export { default as Badge } from "./badge.svelte";
export const badgeVariants = tv({
	base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-s font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
	variants: {
		variant: {
			default:
				"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
			secondary:
				"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
			destructive:
				"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
			error:
				"border-transparent bg-danger text-danger-foreground shadow hover:bg-danger/80",
			warning:
				"border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80",
			success:
				"border-transparent bg-success text-success-foreground shadow hover:bg-success/80",
			outline: "text-foreground"
		}
	},
	defaultVariants: {
		variant: "default"
	}
});

export type Variant = VariantProps<typeof badgeVariants>["variant"];
