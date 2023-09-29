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

	export let registries: ovhapi.cloud.project.ai.registry.Registry[];
	const tableData: Writable<ovhapi.cloud.project.ai.registry.Registry[]> = writable([]);

	$: {
		tableData.set(registries);
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
			header: 'ID',
			accessor: (registries) => registries.id
		}),
		table.column({
			header: 'Région',
			accessor: (registries) => registries.region
		}),
		table.column({
			header: 'URL',
			accessor: (registries) => registries.url
		}),
		table.column({
			header: "Nom d'utilisateur",
			accessor: (registries) => registries.username
		}),
        table.column({
			header: "Ajouté par",
			accessor: (registries) => registries.user
		}),
		table.column({
			header: 'Création',
			id: 'CreationDate',
			accessor: (registries) => registries.createdAt,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: value ? new Date(value) : undefined
				})
		}),
	]);
	const viewModel = table.createViewModel(columns);
</script>

<DataTable {viewModel} />