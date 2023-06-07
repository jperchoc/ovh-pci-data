<script lang="ts">
	import type { Readable, Writable } from 'svelte/store';

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

<button
	on:click={() => {
		$pageIndex--;
	}}
	disabled={!$hasPreviousPage}
>
	Previous
</button>
<button
	on:click={() => {
		$pageIndex++;
	}}
	disabled={!$hasNextPage}
>
	Next
</button>
<p>showing page {$pageIndex + 1}/{$pageCount} ({$pageSize} items/page)</p>
