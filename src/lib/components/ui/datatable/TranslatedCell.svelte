<script lang="ts">
	import { t } from '$lib/translations/translations';
	import type { Parser } from 'sveltekit-i18n';
    export let key: string;
    export let payload: Parser.PayloadDefault | undefined = undefined;
    $: console.log(payload)
</script>

{$t(key, payload)}