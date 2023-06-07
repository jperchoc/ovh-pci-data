<script lang="ts">
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

<div class="table-wrapper">
	<table {...$tableAttrs}>
		<thead>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
					<tr {...rowAttrs}>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<th {...attrs} on:click={props.sort.toggle}>
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
						{...rowAttrs}
						class:clickable={selectedItem}
						class:selected={row.isData() && selectedItem && $selectedItem === row.original}
						on:click={() => handleClick(row)}
					>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<td {...attrs}>
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
	<DataTablePagination pagination={pluginStates.page} />
{/if}

<style>
	.clickable > td {
		cursor: pointer!important;;
	}
	.clickable:hover {
		background: azure;
	}
	.selected {
		background-color: rgb(180, 225, 255);
	}

	.table-wrapper {
		max-width: 100%;
		margin: 0;
		overflow-x: auto;
		overflow-y: hidden;
	}
	table {
		width: 100%;
		border: 1px solid #bef1ff;
		border-bottom: none;
		border-collapse: separate;
		border-spacing: 0;
		margin: 0;
		text-align: left;
		font-size: 1rem;
	}
	th {
		-webkit-transition-duration: 0.2s;
		transition-duration: 0.2s;
		-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		-webkit-transition-property: background-color, border-color, color, fill, -webkit-box-shadow;
		transition-property: background-color, border-color, color, fill, -webkit-box-shadow;
		transition-property: background-color, border-color, box-shadow, color, fill;
		transition-property: background-color, border-color, box-shadow, color, fill, -webkit-box-shadow;
		height: 2.625rem;
		padding: 0.25rem 0.5rem;
		white-space: nowrap;
		outline: none;
		color: #4d5592;
		font-weight: 700;
		background-color: #bef1ff;

		text-align: left;

		cursor: pointer;
		color: #0050d7;
		font-weight: 700;
	}

	tr {
		background-color: #fff;
	}

	td {
		padding: 0 0.5rem;
		height: 2.5rem;
		white-space: nowrap;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
		outline: none;
		color: #4d5592;
		border-bottom: 1px solid #bef1ff;
		background: none;
		cursor: default;
	}
</style>
