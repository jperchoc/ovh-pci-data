<script lang="ts">
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { writable, type Writable } from "svelte/store";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell, TableLinkCell } from "$components/ui/datatable";
	import { Card, CardContent, CardHeader } from "$components/ui/card";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.dataProcessing.Job[]> = writable([]);

    $: jobs = data.jobs;
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
            header: 'Name',
            accessor: item => item,
            cell: ({ value: job }) =>
                createRender(TableLinkCell, {
                    linkLabel: job.name, 
                    href: `/project/${$page.params.projectId}/dataprocessing/job/${job.id}`, 
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

    onMount(() => {
        const it = setInterval(() => {
            invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataProcessing/jobs`);
        }, 10000)
        return () => {
            clearInterval(it);
        }
    });
</script>

<Card>
    <CardHeader>
        <h2 class="font-bold text-xl">Jobs</h2>
    </CardHeader>
    <CardContent class="p-0 pb-4">
{#if jobs}
    <DataTable {viewModel}/>
{:else}
    <p>No job found</p>
{/if}
    </CardContent>
</Card>