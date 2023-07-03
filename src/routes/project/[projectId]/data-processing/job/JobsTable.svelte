<script lang="ts">
	import type { ovhapi } from "$types/ovh";
	import { page } from "$app/stores";
	import { writable, type Writable } from "svelte/store";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell, TableLinkCell, TranslatedCell } from "$components/ui/datatable";


    export let jobs: ovhapi.cloud.project.dataProcessing.Job[];
    const tableData: Writable<ovhapi.cloud.project.dataProcessing.Job[]> = writable([]);

    $: {
        tableData.set(jobs);
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'], initialSortKeys: [{id: 'createdAtCol', order: 'desc'}] }),
        colOrder: addColumnOrder(),
        page: addPagination({
            initialPageIndex: 0,
            initialPageSize: 5
        })
    });
    const columns = table.createColumns([
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.job.list.table.columns.name',
            }),
            accessor: item => item,
            cell: ({ value: job }) =>
                createRender(TableLinkCell, {
                    linkLabel: job.name, 
                    href: `/project/${$page.params.projectId}/data-processing/job/${job.id}`, 
                    subLabel: job.id
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (job) => job.name,
                }
            }
        }),
        table.column({
            header: 'Notebook',
            accessor: job => job.notebook ?? '',
        }),
        table.column({
            header: 'Region',
            accessor: job => job.region,
        }),
        table.column({
            header: 'Type',
            accessor: job => job.engine,
        }),
        table.column({
            header: 'Created at',
            id: 'createdAtCol',
            accessor: job => job.creationDate,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            header: 'Status',
            accessor: job => job.status,
        }),
    ]);
    const viewModel = table.createViewModel(columns);

</script>

<DataTable {viewModel}/>