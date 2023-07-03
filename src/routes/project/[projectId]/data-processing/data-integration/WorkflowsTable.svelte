<script lang="ts">
    import { t } from '$lib/translations/translations';

	import { ovhapi } from "$types/ovh";
	import { page } from "$app/stores";
	import { writable, type Writable } from "svelte/store";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell, TableLinkCell, TranslatedCell } from "$components/ui/datatable";
    import type { badgeVariants } from "$components/ui/badge";
	import type { VariantProps } from "class-variance-authority";
	import Switch from "$components/ui/switch/Switch.svelte";
	import TranslatedBadgeCell from '$components/ui/datatable/TranslatedBadgeCell.svelte';
	import { Code } from '$components/ui/typography';


    export let workflows: ovhapi.cloud.project.dataIntegration.Workflow[];
    export let selectedWorkflow: Writable<ovhapi.cloud.project.dataIntegration.Workflow>;
    const tableData: Writable<ovhapi.cloud.project.dataIntegration.Workflow[]> = writable([]);

    $: {
        tableData.set(workflows);
    }

    const getStatusVariant = (status: ovhapi.cloud.project.dataIntegration.WorkflowStatusEnum):VariantProps<typeof badgeVariants>["variant"] => {
        switch(status) {
            case (ovhapi.cloud.project.dataIntegration.WorkflowStatusEnum.ERROR):
                return 'error';
            case (ovhapi.cloud.project.dataIntegration.WorkflowStatusEnum.CREATING):
                return 'warning'
            case (ovhapi.cloud.project.dataIntegration.WorkflowStatusEnum.READY):
                return 'success'
            default: 
                return 'default'
        }
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'], initialSortKeys: [{id: 'nameCol', order: 'desc'}] }),
        colOrder: addColumnOrder(),
        page: addPagination({
            initialPageIndex: 0,
            initialPageSize: 5
        })
    });
    const columns = table.createColumns([
        table.column({
            id: 'nameCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.name',
            }),
            accessor: item => item,
            cell: ({ value: workflow }) =>
                createRender(TableLinkCell, {
                    linkLabel: workflow.name,
                    href: undefined,
                    subLabel: workflow.id
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (workflows) => workflows.name,
                }
            }
        }),
        table.column({
            id: 'sourceCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.source',
            }),
            accessor: workflow => workflow,
            cell: ({ value: workflow }) =>
                createRender(TableLinkCell, {
                    linkLabel: workflow.sourceName || '-', 
                    href: undefined,
                    subLabel: workflow.sourceId
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (workflows) => workflows.sourceName,
                }
            }
        }),
        table.column({
            id: 'destinationCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.destination',
            }),
            accessor: workflow => workflow,
            cell: ({ value: workflow }) =>
                createRender(TableLinkCell, {
                    linkLabel: workflow.destinationName || '-', 
                    href: undefined,
                    subLabel: workflow.destinationId
                }
            ),
            plugins: {
                sort: {
                    getSortValue: (workflows) => workflows.destinationName,
                }
            }
        }),
        table.column({
            id: 'scheduleCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.schedule',
            }),
            accessor: workflow => workflow.schedule || '',
            cell: ({ value }) => value.length > 0 ? 
                createRender(Code, {})
                .slot(value) : value
        }),
        table.column({
            id: 'statusCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.status',
            }),
            accessor: workflows => workflows.status,
            cell: ({ value: status}) => 
                createRender(TranslatedBadgeCell, {
                    key: 'dataprocessing.dataIntegration.list.workflow_statuses.' + status,
                    variant: status ? getStatusVariant(status) : 'default'
                })
        }),
        table.column({
            id: 'lastExecCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.last_exec',
            }),
            accessor: workflow => workflow.lastExecutionDate,
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            id: 'regionCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.region',
            }),
            accessor: workflow => workflow.region,
        }),
        table.column({
            id: 'enabledCol',
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_worflows.columns.enabled',
            }),
            accessor: workflow => workflow.enabled,
            cell: ({ value: enabled}) => 
                createRender(Switch, {
                    rootChecked: enabled,
                    rootDisabled: true                    
                })
        }),
    ]);
    const viewModel = table.createViewModel(columns);

</script>

<DataTable {viewModel} selectedItem={selectedWorkflow} selectedItemKey="id" />