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
	import { POLLING_INTERVAL } from "$lib/global.constants";
	import type { ovhapi } from "$types/ovh";


    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.database.Service[]> = writable([]);

    $: dbServices = data.dbServices;
    $: {
        tableData.set(dbServices);
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
            cell: ({ value: service }) =>
                createRender(TableLinkCell, {
                    linkLabel: service.description, 
                    href: `/project/${$page.params.projectId}/database/${service.id}`, 
                    subLabel: service.id
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (item) => item.description,
                }
            }
        }),
        table.column({
            header: 'Engine',
            accessor: service => service.engine,
        }),
        table.column({
            header: 'Plan',
            accessor: service => service.plan,
        }),
        table.column({
            header: 'Flavor',
            accessor: service => service.flavor,
        }),
        table.column({
            header: 'Nodes',
            accessor: service => service.nodeNumber,
        }),
        table.column({
            header: 'Created at',
            id: 'createdAtCol',
            accessor: service => service.createdAt,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: new Date(value),
                }
            ),
        }),
        table.column({
            header: 'Status',
            accessor: service => service.status,
        }),
    ]);
    const viewModel = table.createViewModel(columns);

    onMount(() => {
        const it = setInterval(() => {
            if (document && !document.hidden) {
                invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/database/service`);
            }
        }, POLLING_INTERVAL)
        return () => {
            clearInterval(it);
        }
    });
</script>

<Card>
    <CardHeader>
        <h2 class="font-bold text-xl">Databases</h2>
    </CardHeader>
    <CardContent class="p-0 pb-4">
{#if dbServices}
    <DataTable {viewModel}/>
{:else}
    <p>No service found</p>
{/if}
    </CardContent>
</Card>