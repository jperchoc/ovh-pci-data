<script lang="ts">
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { writable, type Writable } from "svelte/store";
    import { createRender, createTable } from 'svelte-headless-table';
    import { addColumnOrder, addSortBy, addPagination } from 'svelte-headless-table/plugins';
	import { JsonViewer, TableDateCell, TableLinkCell, DataTable } from "$components";
	import { Card } from "$components/ui/card";
	import CardContent from "$components/ui/card/CardContent.svelte";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.app.App[]> = writable([]);
    let selectedApp: Writable<ovhapi.cloud.project.ai.app.App> = writable();

    $: apps = data.apps.sort((a, b) => a.spec.name.localeCompare(b.spec.name));
    $: {
        tableData.set(apps);
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'] }),
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
                    href: `/project/${$page.params.projectId}/ai/deploy/${id}`, 
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
            header: 'Image',
            accessor: app => app.spec.image,
        }),
        table.column({
            header: 'Region',
            accessor: app => app.spec.region,
        }),
        table.column({
            header: 'Ressources',
            accessor: app => `${app.spec.resources.gpu ? app.spec.resources.gpu : app.spec.resources.cpu} ${app.spec.resources.gpu ? 'GPU': 'CPU'} | ${app.spec.scalingStrategy?.automatic  ? app.spec.scalingStrategy?.automatic.replicasMin : app.spec.scalingStrategy?.fixed?.replicas} replicas `,
        }),
        table.column({
            header: 'Created at',
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
    console.log(viewModel)

    onMount(() => {
        const it = setInterval(() => {
            invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/ai/app`);
        }, 10000)
        return () => {
            clearInterval(it);
        }
    });
</script>

<h2 class="mb-4">Apps</h2>
<Card>
    <CardContent>
{#if apps}
    <DataTable {viewModel} selectedItem={selectedApp}/>
{:else}
    <p>No app found</p>
{/if}
    </CardContent>
</Card>

{#if $selectedApp}
<Card class="mt-2 py-4">
    <CardContent>
    
    <JsonViewer data={$selectedApp} />
    </CardContent>
</Card>
{/if}


