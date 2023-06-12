<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";
	import { writable, type Writable } from "svelte/store";
    import { createRender, createTable } from 'svelte-headless-table';
    import { addColumnOrder, addSortBy, addPagination } from 'svelte-headless-table/plugins';
	import TableLinkCell from "$components/TableLinkCell.svelte";
	import TableDateCell from "$components/TableDateCell.svelte";
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	import { Card, CardContent, CardHeader } from "$components/ui/card";
	import { DataTable } from "$components";


    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.dataProcessing.notebook.Notebook[]> = writable([]);

    $: notebooks = data.notebooks;
    $: {
        tableData.set(notebooks);
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'], initialSortKeys: [{id: 'updatedAtCol', order: 'desc'}] }),
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
            cell: ({ value: notebook }) =>
                createRender(TableLinkCell, {
                    linkLabel: notebook.spec.name, 
                    href: `/project/${$page.params.projectId}/dataprocessing/notebook/${notebook.id}`, 
                    subLabel: notebook.id
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (notebook) => notebook.spec.name,
                }
            }
        }),
        table.column({
            header: 'Region',
            accessor: notebook => notebook.spec.region,
        }),
        table.column({
            header: 'Framework',
            accessor: notebook => `${notebook.spec.env.engineName} ${notebook.spec.env.engineVersion}`,
        }),
        table.column({
            header: 'Privacy',
            accessor: () => 'Public',
        }),
        

        table.column({
            header: 'Updated at',
            id: 'updatedAtCol',
            accessor: job => job.updatedAt,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            header: 'Status',
            accessor: job => job.status.state,
        }),
    ]);
    const viewModel = table.createViewModel(columns);

    onMount(() => {
        const it = setInterval(() => {
            invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataProcessing/notebooks`);
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
{#if notebooks}
    <DataTable {viewModel}/>
{:else}
    <p>No job found</p>
{/if}
    </CardContent>
</Card>