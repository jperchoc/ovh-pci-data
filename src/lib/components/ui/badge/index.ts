import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.svelte";
export const badgeVariants = cva(
	"inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
				secondary:
					"bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
				destructive:
					"bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
				success:
					"bg-success hover:bg-success/80 border-transparent text-success-foreground",
				error:
					"bg-error hover:bg-error/80 border-transparent text-error-foreground",
				warning:
					"bg-warning hover:bg-warning/80 border-transparent text-warning-foreground",
				info:
					"bg-info hover:bg-info/80 border-transparent text-info-foreground",
				outline: "text-foreground"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);
