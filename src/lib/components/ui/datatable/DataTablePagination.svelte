<script lang="ts">
	import type { Readable, Writable } from 'svelte/store';
	import Button from '../button/Button.svelte';
	import { P, Small } from '../typography';

	type Pagination = {
		pageSize: Readable<number>;
		pageIndex: Writable<number>;
		pageCount: Readable<number>;
		serverItemCount: Readable<number>;
		hasPreviousPage: Readable<boolean>;
		hasNextPage: Readable<boolean>;
	};
    
	export let pagination: Pagination;
	const { pageSize, pageIndex, pageCount, hasPreviousPage, hasNextPage } = pagination;
</script>

<Button
	variant="outline"
	on:click={() => {
		$pageIndex--;
	}}
	disabled={!$hasPreviousPage}
>
	Previous
</Button>
<Button
	variant="outline"
	on:click={() => {
		$pageIndex++;
	}}
	disabled={!$hasNextPage}
>
	Next
</Button>
<P>
	<Small>showing page {$pageIndex + 1}/{$pageCount} ({$pageSize} items/page)</Small>
</P>
