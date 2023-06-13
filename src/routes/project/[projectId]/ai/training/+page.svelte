<script lang="ts">
	import { page } from "$app/stores";
	import { writable, type Writable } from "svelte/store";
	import type { PageData } from "./$types";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell, TableLinkCell } from "$components";
	import CardContent from "$components/ui/card/CardContent.svelte";
	import Card from "$components/ui/card/Card.svelte";
	import CardHeader from "$components/ui/card/CardHeader.svelte";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.job.Job[]> = writable([]);
    $: trainings = data.trainings;
    $: {
        tableData.set(trainings);
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
            id: 'createdAtCol',
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


<Card>
    <CardHeader>
        <h2 class="font-bold text-xl">AI Training</h2>
        <p class="text-sm">To access this list of jobs via the command line, run the following command: <code class="bg-[#f9f2f4] text-[#c7254e] font py-0.5 px-1">ovhai job ls</code></p>
    </CardHeader>
    <CardContent class="p-0 pb-4">
{#if trainings}
    <DataTable {viewModel} />
{:else}
<p>No trainings found</p>
{/if}
    </CardContent>
</Card>