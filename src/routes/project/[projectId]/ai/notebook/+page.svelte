<script lang="ts">
    import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { writable, type Writable } from "svelte/store";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addSortBy, addPagination } from 'svelte-headless-table/plugins';
	import { DataTable, TableDateCell, TableLinkCell } from "$components/ui/datatable";
	import { Card, CardContent, CardHeader } from "$components/ui/card";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.notebook.Notebook[]> = writable([]);
    $: notebooks = data.notebooks;
    $: {
        tableData.set(notebooks);
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
            id: 'name',
            accessor: item => item,
            cell: ({ value: { spec, id} }) =>
                createRender(TableLinkCell, {
                    linkLabel: spec.name, 
                    href: `/project/${$page.params.projectId}/ai/notebook/${id}`, 
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
            accessor: app => app.spec.region,
        }),
        table.column({
            header: 'Created at',
            id: 'createdAtCol',
            accessor: app => app.createdAt,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: new Date(value),
                }
            ),
        }),
        table.column({
            header: 'Updated at',
            accessor: app => app.updatedAt,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: new Date(value),
                }
            ),
        }),
        table.column({
            header: 'Status',
            accessor: app => app.status.state,
        }),
    ]);
    const viewModel = table.createViewModel(columns);

    onMount(() => {
        const it = setInterval(() => {
            invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/ai/notebook`);
        }, 10000)
        return () => {
            clearInterval(it);
        }
    });
</script>

<Card>
    <CardHeader>
        <h2 class="font-bold text-xl">AI Notebooks</h2>
    </CardHeader>
    <CardContent class="p-0 pb-4">
{#if notebooks}
    <DataTable {viewModel} />
{:else}
    <p>No notebook found</p>
{/if}
    </CardContent>
</Card>
