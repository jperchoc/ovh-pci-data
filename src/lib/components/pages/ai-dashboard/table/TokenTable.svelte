<script lang="ts">
	import type { ovhapi } from '$types/ovh';
	import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';
	import { createRender, createTable } from 'svelte-headless-table';
	import { addColumnOrder, addPagination, addSortBy } from 'svelte-headless-table/plugins';
	import {
		DataTable,
		TableDateCell,
		TableLinkCell,
		TranslatedCell
	} from '$components/ui/datatable';

	export let tokens: ovhapi.cloud.project.ai.token.Token[];
	const tableData: Writable<ovhapi.cloud.project.ai.token.Token[]> = writable([]);

	$: {
		tableData.set(tokens);
	}

	const table = createTable(tableData, {
		sort: addSortBy({
			disableMultiSort: true,
			toggleOrder: ['asc', 'desc'],
			initialSortKeys: [{ id: 'CreationDate', order: 'desc' }]
		}),
		colOrder: addColumnOrder(),
		page: addPagination({
			initialPageIndex: 0,
			initialPageSize: 5
		})
	});

	const columns = table.createColumns([
		table.column({
			header: 'Nom',
			accessor: (token) => token.spec.name
		}),
		table.column({
			header: 'Sélectieur de labels',
			accessor: (token) => token.spec.labelSelector
		}),
		table.column({
			header: 'Région',
			accessor: (token) => token.spec.region
		}),
		table.column({
			header: 'Rôle',
			accessor: (token) => token.spec.role
		}),
		table.column({
			header: 'Dernière de création',
			id: 'CreationDate',
			accessor: (token) => token.createdAt,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: value ? new Date(value) : undefined
				})
		}),
	]);
	const viewModel = table.createViewModel(columns);
</script>

<DataTable {viewModel} />