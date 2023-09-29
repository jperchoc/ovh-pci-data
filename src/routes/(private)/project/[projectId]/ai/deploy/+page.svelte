<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { writable, type Writable } from 'svelte/store';
	import { createRender, createTable, Subscribe, Render } from 'svelte-headless-table';
	import {
		addColumnOrder,
		addSortBy,
		addPagination,
		addTableFilter
	} from 'svelte-headless-table/plugins';

	import { CaretSort, ChevronDown } from 'radix-icons-svelte';
	import { cn } from '$lib/utils';
	import { /*DataTable,*/ TableDateCell, TableLinkCell } from '$components/ui/datatable';

	import * as Table from '$lib/components/ui/table';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { JsonViewer } from '$components/ui/json-viewer';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import { Badge, badgeVariants } from '$components/ui/badge';
	import type { VariantProps } from 'class-variance-authority';
	import { ovhapi } from '$types/ovh';
	import Button from '$components/ui/button/button.svelte';

	const getStatusVariant = (
		status: ovhapi.cloud.project.ai.app.AppStateEnum
	): VariantProps<typeof badgeVariants>['variant'] => {
		switch (status) {
			case ovhapi.cloud.project.ai.app.AppStateEnum.FAILED:
			case ovhapi.cloud.project.ai.app.AppStateEnum.ERROR:
			case ovhapi.cloud.project.ai.app.AppStateEnum.STOPPED:
				return 'error';
			case ovhapi.cloud.project.ai.app.AppStateEnum.STOPPING:
			case ovhapi.cloud.project.ai.app.AppStateEnum.SCALING:
			case ovhapi.cloud.project.ai.app.AppStateEnum.INITIALIZING:
			case ovhapi.cloud.project.ai.app.AppStateEnum.QUEUED:
				return 'warning';
			case ovhapi.cloud.project.ai.app.AppStateEnum.RUNNING:
				return 'success';
			case ovhapi.cloud.project.ai.app.AppStateEnum.DELETED:
			case ovhapi.cloud.project.ai.app.AppStateEnum.DELETING:
			case ovhapi.cloud.project.ai.app.AppStateEnum.STOPPED:
				return 'warning';
			default:
				return 'default';
		}
	};

	export let data: PageData;
	const tableData: Writable<ovhapi.cloud.project.ai.app.App[]> = writable([]);
	let selectedApp: Writable<ovhapi.cloud.project.ai.app.App> = writable();

	$: apps = data.apps.sort((a, b) => a.spec.name.localeCompare(b.spec.name));
	$: {
		tableData.set(apps);
	}

	const table = createTable(tableData, {
		sort: addSortBy({
			disableMultiSort: true,
			toggleOrder: ['asc', 'desc'],
			initialSortKeys: [{ id: 'createdAtCol', order: 'desc' }]
		}),
		colOrder: addColumnOrder(),
		page: addPagination({
			initialPageIndex: 0,
			initialPageSize: 5
		})
		// filter: addTableFilter({
		//     fn: ({ filterValue, value }) => value.includes(filterValue)
		// }),
	});
	const columns = table.createColumns([
		table.column({
			header: 'Name',
			accessor: (item) => item,
			cell: ({ value: { spec, id } }) =>
				createRender(TableLinkCell, {
					linkLabel: spec.name,
					href: `/project/${$page.params.projectId}/ai/deploy/${id}`,
					subLabel: id
				}),
			plugins: {
				sort: {
					getSortValue: ({ spec }) => spec.name
				}
			}
		}),
		table.column({
			header: 'Image',
			accessor: (app) => app.spec.image
		}),
		table.column({
			header: 'Region',
			accessor: (app) => app.spec.region
		}),
		table.column({
			header: 'Ressources',
			accessor: (app) =>
				`${app.spec.resources.gpu ? app.spec.resources.gpu : app.spec.resources.cpu} ${
					app.spec.resources.gpu ? 'GPU' : 'CPU'
				} | ${
					app.spec.scalingStrategy?.automatic
						? app.spec.scalingStrategy?.automatic.replicasMin
						: app.spec.scalingStrategy?.fixed?.replicas
				} replicas `
		}),
		table.column({
			header: 'Created at',
			id: 'createdAtCol',
			accessor: (app) => app.createdAt,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: new Date(value)
				})
		}),
		table.column({
			header: 'Updated at',
			accessor: (app) => app.updatedAt,
			cell: ({ value }) =>
				createRender(TableDateCell, {
					date: new Date(value)
				})
		}),
		table.column({
			header: 'Status',
			accessor: (app) => app.status.state,
			cell: ({ value }) => {
				return createRender(Badge, {
					variant: value ? getStatusVariant(value) : 'default'
				}).slot(value || '');
			}
		})
	]);
	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, flatColumns, pluginStates, rows } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { sortKeys } = pluginStates.sort;

	//const { selectedDataIds } = pluginStates.select;

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/ai/app`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});
</script>

<Card>
	<CardHeader>
		<h2 class="font-bold text-xl">AI Deploy</h2>
	</CardHeader>
	<CardContent class="p-0 pb-4">
		{#if apps}
			<!-- <DataTable {viewModel} selectedItem={selectedApp}/> -->
			<Table.Root {...$tableAttrs}>
				<Table.Header>
					{#each $headerRows as headerRow}
						<Subscribe rowAttrs={headerRow.attrs()}>
							<Table.Row>
								{#each headerRow.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
										<Table.Head {...attrs} class={cn('[&:has([role=checkbox])]:pl-3')}>
											{#if cell.id === 'amount'}
												<div class="text-right">
													<Render of={cell.render()} />
												</div>
											{:else if cell.id === 'email'}
												<Button variant="ghost" on:click={props.sort.toggle}>
													<Render of={cell.render()} />
													<CaretSort
														class={cn(
															$sortKeys[0]?.id === cell.id && 'text-foreground',
															'ml-2 h-4 w-4'
														)}
													/>
												</Button>
											{:else}
												<Render of={cell.render()} />
											{/if}
										</Table.Head>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Header>
				<Table.Body {...$tableBodyAttrs}>
					{#each $pageRows as row (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
							<Table.Row {...rowAttrs}>
								{#each row.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs>
										<Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
											{#if cell.id === 'amount'}
												<div class="text-right font-medium">
													<Render of={cell.render()} />
												</div>
											{:else}
												<Render of={cell.render()} />
											{/if}
										</Table.Cell>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Body>
			</Table.Root>
			<div class="flex items-center justify-end space-x-2 py-4">
				<div class="flex-1 text-sm text-muted-foreground">
					{Object.keys($rows).length} of{' '}
					{$rows.length} row(s) selected.
				</div>
				<Button
					variant="outline"
					size="sm"
					on:click={() => ($pageIndex = $pageIndex - 1)}
					disabled={!$hasPreviousPage}>Previous</Button
				>
				<Button
					variant="outline"
					size="sm"
					disabled={!$hasNextPage}
					on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
				>
			</div>
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
