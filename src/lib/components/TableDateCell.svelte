<script lang="ts">
    import { t } from '$lib/translations/translations';

    export let date: Date;
    export let dateStyle: 'full' | 'long' | 'medium' | 'short' = 'long';
    export let timeStyle: 'full' | 'long' | 'medium' | 'short' = 'short';
    $: formater = Intl.DateTimeFormat($t('common.lang'), {
        dateStyle,
        timeStyle
    });
</script>

{formater.format(date)}