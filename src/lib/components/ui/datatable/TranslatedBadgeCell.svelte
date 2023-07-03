<script lang="ts">
    import { t } from '$lib/translations/translations';
	import type { VariantProps } from "class-variance-authority";
	import { Badge, type badgeVariants } from "../badge";

    export let key: string;
    export let variant: VariantProps<typeof badgeVariants>["variant"] = "default";
</script>

<Badge {variant}>{$t(key)}</Badge>