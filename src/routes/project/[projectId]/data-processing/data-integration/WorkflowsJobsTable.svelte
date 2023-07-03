<script lang="ts">
    import { t } from '$lib/translations/translations';
	import { ovhapi } from "$types/ovh";
	import { writable, type Writable } from "svelte/store";
	import { createRender, createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable, TableDateCell } from "$components/ui/datatable";
	import type { VariantProps } from "class-variance-authority";
	import TranslatedCell from '$components/ui/datatable/TranslatedCell.svelte';
	import TranslatedBadgeCell from '$components/ui/datatable/TranslatedBadgeCell.svelte';
	import type { badgeVariants } from '$components/ui/badge';


    export let jobs: ovhapi.cloud.project.dataIntegration.Job[];
    const tableData: Writable<ovhapi.cloud.project.dataIntegration.Job[]> = writable([]);

    const getElapsed = (ms: number) => {
        if (!ms) {
            return '-';
        }
        // convert to seconds
        let diff = ms / 1000;
        const seconds = Math.round(diff % 60);
        diff = Math.floor(diff / 60);
        const minutes = Math.round(diff % 60);
        diff = Math.floor(diff / 60);
        const hours = diff;
        return [hours, minutes, seconds]
        .map((unit) => unit.toString().padStart(2, '0'))
        .join(':');
    }

    const getStatusVariant = (status: ovhapi.cloud.project.dataIntegration.StatusEnum):VariantProps<typeof badgeVariants>["variant"] => {
        switch(status) {
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.DELETED):
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.FAILED):
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.TERMINATED):
                return 'error';
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.PROVISIONING):
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.SUBMITTED):
                return 'warning'
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.COMPLETED):
                return 'success'
            case (ovhapi.cloud.project.dataIntegration.StatusEnum.PROVISIONING):
                return 'info'
            default: 
                return 'default'
        }
    }

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
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.createdAt',
            }),
            id: 'createdAtCol',
            accessor: job => job.createdAt || '',
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.startedAt',
            }),
            id: 'startedAtCol',
            accessor: job => job.startedAt || '',
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.endedAt',
            }),
            id: 'endedAtCol',
            accessor: job => job.endedAt || '',
            cell: ({ value }) =>
                createRender(TableDateCell, {
                    date: value ? new Date(value) : undefined,
                }
            ),
        }),
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.duration',
            }),
            id: 'durationCol',
            accessor: job => {
                if (job.endedAt && job.startedAt)
                    return getElapsed(new Date(job.endedAt).getTime() - new Date(job.startedAt).getTime());
                else {
                    return '-'
                }
            }
        }),
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.status',
            }),
            id: 'statusCol',
            accessor: job => job.status || '',
            cell: ({ value: status}) => 
                createRender(TranslatedBadgeCell, {
                    key: 'dataprocessing.dataIntegration.list.jobs_statuses.' + status,
                    variant: status ? getStatusVariant(status) : 'default'
                })
        }),
        table.column({
            header: createRender(TranslatedCell, {
                key: 'dataprocessing.dataIntegration.list.table_jobs.columns.id',
            }),
            id: 'idCol',
            accessor: job => job.id || ''
        }),
    ]);
    const viewModel = table.createViewModel(columns);

</script>

<DataTable {viewModel}/>