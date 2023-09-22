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

	export let workflows: ovhapi.cloud.project.dataIntegration.Workflow[];
	const tableData: Writable<ovhapi.cloud.project.dataIntegration.Workflow[]> = writable([]);

	$: {
		tableData.set(workflows);
	}

	const table = createTable(tableData, {
		sort: addSortBy({
			disableMultiSort: true,
			toggleOrder: ['asc', 'desc'],
			initialSortKeys: [{ id: 'LastExecDateCol', order: 'desc' }]
		}),
		colOrder: addColumnOrder(),
		page: addPagination({
			initialPageIndex: 0,
			initialPageSize: 5
		})
	});

	const columns = table.createColumns([
		table.column({
			header: createRender(TranslatedCell, {
				key: 'dataintegration.workflow.list.table.columns.name'
			}),
			accessor: (item) => item,
			cell: ({ value: workflow }) =>
				createRender(TableLinkCell, {
					linkLabel: workflow.name,
					href: `/project/${$page.params.projectId}/database/${workflow.id}`,
					subLabel: workflow.id
				}),
			plugins: {
				sort: {
					getSortValue: (item) => item.name
				}
			}
		}),
		table.column({
			header: 'Description',
			accessor: (workflow) => workflow.description
		}),
		table.column({
			header: 'Region',
			accessor: (workflow) => workflow.region
		}),
		table.column({
			header: 'Source',
			accessor: (workflow) => workflow.sourceName
		}),
		table.column({
			header: 'Destination',
			accessor: (workflow) => workflow.destinationName
		}),
		table.column({
			header: 'Dernière execution',
			id: 'LastExecDateCol',
			accessor: (workflow) => workflow.lastExecutionDate,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: value ? new Date(value) : undefined
				})
		}),
		table.column({
			header: 'Status',
			accessor: (workflow) => workflow.status
		}),
		table.column({
			header: 'Activé',
			accessor: (workflow) => workflow.enabled
		})
	]);
	const viewModel = table.createViewModel(columns);
</script>

<DataTable {viewModel} />
