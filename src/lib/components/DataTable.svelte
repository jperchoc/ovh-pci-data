<script lang="ts">
	import { cn } from "$lib/utils";

	export let classTable: string | undefined | null = undefined;
	export let classThead: string | undefined | null = undefined;
	export let classTr: string | undefined | null = undefined;
	export let classTh: string | undefined | null = undefined;
	export let classTd: string | undefined | null = undefined;

	import { DataTablePagination } from '$components';

	import type { Writable } from 'svelte/store';

	type Item = $$Generic;
	import { ArrowDownWideNarrow, ArrowUpWideNarrow } from 'lucide-svelte';
	import { BodyRow, Render, Subscribe } from 'svelte-headless-table';
	import type { TableViewModel } from 'svelte-headless-table';
	import type { AnyPlugins } from 'svelte-headless-table/lib/types/TablePlugin';

	export let viewModel: TableViewModel<Item, AnyPlugins>;

	const { headerRows, tableAttrs, tableBodyAttrs, pageRows, pluginStates } = viewModel;

	export let selectedItem: Writable<Item> | undefined = undefined;

	const handleClick = (row: BodyRow<Item, AnyPlugins>) => {
		if (row.isData() && selectedItem !== undefined) {
			selectedItem.set(row.original);
		}
	};
</script>

<div class="w-full overflow-auto">
	<table class={cn("w-full caption-bottom text-sm", classTable)} {...$tableAttrs}>
		<thead class={cn("[&_tr]:border-b", classThead)}>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
					<tr class={cn(
						"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
						classTr
					)} {...rowAttrs}>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<th class={cn(
									"h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
									classTh
								)} {...attrs} on:click={props.sort.toggle}>
									<Render of={cell.render()} />
									{#if props.sort.order === 'asc'}
										<ArrowDownWideNarrow />
									{:else if props.sort.order === 'desc'}
										<ArrowUpWideNarrow />
									{/if}
								</th>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</thead>
		<tbody {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<tr 
						data-state={(row.isData() && selectedItem && $selectedItem === row.original) ? 'selected' : ''}
						class={cn(
							"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
							classTr
						)}
						{...rowAttrs}
						class:clickable={selectedItem}
						on:click={() => handleClick(row)}
					>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<td class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", classTd)} {...attrs}>
									<Render of={cell.render()} />
								</td>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</tbody>
	</table>
</div>
{#if pluginStates.page}
<div class="text-right my-2">
	<DataTablePagination pagination={pluginStates.page} />
</div>
{/if}

<style>
	.clickable > td {
		cursor: pointer!important;;
	}
</style>
