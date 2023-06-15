<script lang="ts">
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { writable, type Writable } from "svelte/store";
    import { createRender, createTable } from 'svelte-headless-table';
    import { addColumnOrder, addSortBy, addPagination } from 'svelte-headless-table/plugins';
	import { DataTable, TableDateCell, TableLinkCell } from "$components/ui/datatable";
	import { Card, CardContent, CardHeader } from "$components/ui/card";
	import { JsonViewer } from "$components/ui/json-viewer";
	import { POLLING_INTERVAL } from "$lib/global.constants";
	import { Badge, badgeVariants } from "$components/ui/badge";
	import type { VariantProps } from "class-variance-authority";
	import { ovhapi } from "$types/ovh";

    const getStatusVariant = (status: ovhapi.cloud.project.ai.app.AppStateEnum):VariantProps<typeof badgeVariants>["variant"] => {
        switch(status) {
            case (ovhapi.cloud.project.ai.app.AppStateEnum.FAILED):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.ERROR):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.STOPPED):
                return 'error';
            case (ovhapi.cloud.project.ai.app.AppStateEnum.STOPPING):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.SCALING):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.INITIALIZING):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.QUEUED):
                return 'warning'
            case (ovhapi.cloud.project.ai.app.AppStateEnum.RUNNING):
                return 'success'
            case (ovhapi.cloud.project.ai.app.AppStateEnum.DELETED):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.DELETING):
            case (ovhapi.cloud.project.ai.app.AppStateEnum.STOPPED):
                return 'info'
            default: 
                return 'default'
        }
    }

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.app.App[]> = writable([]);
    let selectedApp: Writable<ovhapi.cloud.project.ai.app.App> = writable();

    $: apps = data.apps.sort((a, b) => a.spec.name.localeCompare(b.spec.name));
    $: {
        tableData.set(apps);
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
            cell: ({ value }) => {
                return createRender(Badge, {
                    variant: value ? getStatusVariant(value) : 'default'
                }).slot(value || '')
            },
        }),
    ]);
    const viewModel = table.createViewModel(columns);

    onMount(() => {
        const it = setInterval(() => {
            if (document && !document.hidden) {
                invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/ai/app`);
            }
        }, POLLING_INTERVAL)
        return () => {
            clearInterval(it);
        }
    });
</script>

<Card>
    <CardHeader>
        <h2 class="font-bold text-xl">AI Deploy</h2>
    </CardHeader>
    <CardContent class="p-0 pb-4">
{#if apps}
    <DataTable {viewModel} selectedItem={selectedApp}/>
{:else}
    <p>No app found</p>
{/if}
    </CardContent>
</Card>

{#if $selectedApp}
<Card class="mt-2 pb-4">
    <CardContent class="p-6">
        <JsonViewer data={$selectedApp} />
    </CardContent>
</Card>
{/if}


