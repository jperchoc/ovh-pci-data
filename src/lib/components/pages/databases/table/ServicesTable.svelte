<script lang="ts">
	import { createRender, createTable } from 'svelte-headless-table';
	import { addColumnOrder, addPagination, addSortBy } from 'svelte-headless-table/plugins';
	import { DataTable, TableDateCell, TableLinkCell } from '$components/ui/datatable';
	import type { ovhapi } from '$types/ovh';
	import { writable, type Writable } from 'svelte/store';
	import { page } from '$app/stores';
	import Actions from './Actions.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let services: ovhapi.cloud.project.database.Service[];
	const tableData: Writable<ovhapi.cloud.project.database.Service[]> = writable([]);

	$: {
		tableData.set(services);
	}

	const table = createTable(tableData, {
		sort: addSortBy({
			disableMultiSort: true,
			toggleOrder: ['asc', 'desc'],
			initialSortKeys: [{ id: 'createdAtCol', order: 'desc' }]
		}),
		colOrder: addColumnOrder(),
		page: addPagination({
			initialPageIndex: 0,
			initialPageSize: 5
		})
	});
	const columns = table.createColumns([
		table.column({
			header: 'Name',
			accessor: (item) => item,
			cell: ({ value: service }) =>
				createRender(TableLinkCell, {
					linkLabel: service.description,
					href: `/project/${$page.params.projectId}/database/${service.id}`,
					subLabel: service.id
				}),
			plugins: {
				sort: {
					getSortValue: (item) => item.description
				}
			}
		}),
		table.column({
			header: 'Engine',
			accessor: (service) => service.engine
		}),
		table.column({
			header: 'Plan',
			accessor: (service) => service.plan
		}),
		table.column({
			header: 'Flavor',
			accessor: (service) => service.flavor
		}),
		table.column({
			header: 'Nodes',
			accessor: (service) => service.nodeNumber
		}),
		table.column({
			header: 'Created at',
			id: 'createdAtCol',
			accessor: (service) => service.createdAt,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: new Date(value)
				})
		}),
		table.column({
			header: 'Status',
			accessor: (service) => service.status
		}),
		table.column({
			header: '',
			accessor: (service) => service,
			cell: ({ value }) => {
				return createRender(Actions).on('rename-clicked', () =>
					dispatch('rename-clicked', { service: value })
				);
			}
		})
	]);
	const viewModel = table.createViewModel(columns);
</script>

<DataTable {viewModel} />
