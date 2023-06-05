<script lang="ts">
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { invalidate } from "$app/navigation";
	import { writable, type Writable } from "svelte/store";
	import { t } from '$lib/translations/translations';
    import { Render, Subscribe, createRender, createTable } from 'svelte-headless-table';
    import { addColumnOrder, addSortBy, addPagination } from 'svelte-headless-table/plugins';
	import { JsonViewer, TableDateCell, TableLinkCell } from "$components";

    export let data: PageData;
    const tableData: Writable<ovhapi.cloud.project.ai.app.App[]> = writable([]);
    let selectedApp: ovhapi.cloud.project.ai.app.App;

    $: apps = data.apps.sort((a, b) => a.spec.name.localeCompare(b.spec.name));
    $: {
        tableData.set(apps)
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true }),
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
            accessor: app => new Date(app.createdAt),
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value,
                }
            ),
        }),
        table.column({
            header: 'Updated at',
            accessor: app => new Date(app.updatedAt),
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value,
                }
            ),
        }),
        table.column({
            header: 'Status',
            accessor: app => app.status.state,
        }),
    ]);
    const { headerRows, tableAttrs, tableBodyAttrs, pageRows, pluginStates } = table.createViewModel(columns);
    const { pageSize, pageIndex, hasPreviousPage, hasNextPage, pageCount } = pluginStates.page;

    onMount(() => {
        const it = setInterval(() => {
            invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/ai/app`);
        }, 10000)
        return () => {
            clearInterval(it);
        }
    });
</script>

<h2>Apps</h2>
{$t('common.test')}
{#if apps}
    <div class="table-wrapper">
        <table {...$tableAttrs}>
        <thead>
          {#each $headerRows as headerRow (headerRow.id)}
            <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
              <tr {...rowAttrs}>
                {#each headerRow.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs
                  props={cell.props()} let:props>
                    <th {...attrs} on:click={props.sort.toggle}>
                        <Render of={cell.render()} />
                        {#if props.sort.order === 'asc'}
                          ⬇️
                        {:else if props.sort.order === 'desc'}
                          ⬆️
                        {/if}
                      </th>
                  </Subscribe>
                {/each}
              </tr>
            </Subscribe>
          {/each}
        </thead>
        <tbody {...$tableBodyAttrs}>
          {#each $pageRows as row (row.id)}
            <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
              <tr {...rowAttrs} class="clickable" class:selected={row.isData() && row.original.id === selectedApp?.id}  on:click={() => { if (row.isData()) {
                    selectedApp = row.original;
                }}}>
                {#each row.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs>
                    <td {...attrs}>
                        <Render of={cell.render()} />
                    </td>
                  </Subscribe>
                {/each}
              </tr>
            </Subscribe>
          {/each}
        </tbody>
      </table>
      <button on:click={() => { $pageIndex--}} disabled={!$hasPreviousPage}>Previous</button>
      <button on:click={() => { $pageIndex++}} disabled={!$hasNextPage}>Next</button>
      <p>showing page {$pageIndex + 1}/{$pageCount} ({$pageSize} items/page)</p>
    </div>
{:else}
<p>No app found</p>
{/if}

{#if selectedApp}
    <JsonViewer data={selectedApp} />
{/if}

<style>
    .clickable {
        cursor: pointer;
    }
    .clickable:hover {
        background: azure;
    }
    .selected {
        background-color: rgb(180, 225, 255);
    }
</style>