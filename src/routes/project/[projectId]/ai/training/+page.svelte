<script lang="ts">
	import { page } from "$app/stores";
	import { writable, type Writable } from "svelte/store";
	import type { PageData } from "./$types";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell, TableLinkCell } from "$components";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.job.Job[]> = writable([]);
    $: trainings = data.trainings;
    $: {
        tableData.set(trainings);
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'] }),
        colOrder: addColumnOrder(),
        page: addPagination({
            initialPageIndex: 0,
            initialPageSize: 10
        })
    });
    const columns = table.createColumns([
        table.column({
            header: 'Name',
            accessor: item => item,
            cell: ({ value: { spec, id} }) =>
                createRender(TableLinkCell, {
                    linkLabel: spec.name, 
                    href: `/project/${$page.params.projectId}/ai/training/${id}`, 
                    subLabel: id
                }
            ),
            plugins: {
                sort: {
                    getSortValue: ({ spec }) => spec.name,
                }
            }
        }),
        table.column({
            header: 'Region',
            accessor: item => item.spec.region,
        }),
        table.column({
            header: 'Image',
            accessor: item => item.spec.image,
        }),
        table.column({
            header: 'User',
            accessor: 'user',
        }),
        table.column({
            header: 'Status',
            accessor: item => item.status.state,
        }),
        table.column({
            header: 'Creation date',
            accessor: item => item.createdAt,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: new Date(value),
                }
            ),
        })
    ]);
    const viewModel = table.createViewModel(columns);

</script>

<h2>Training</h2>
{#if trainings}
    <DataTable {viewModel} />
{:else}
<p>No trainings found</p>
{/if}