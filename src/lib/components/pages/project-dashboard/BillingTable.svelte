<script lang="ts">
	import type { ovhapi } from "$types/ovh";
	import { writable, type Writable } from "svelte/store";
	import { createTable } from "svelte-headless-table";
	import { addColumnOrder, addPagination, addSortBy } from "svelte-headless-table/plugins";
	import { DataTable } from "$components/ui/datatable";

    type ResourceLine = ovhapi.cloud.billingView.Component & {
		region: string;
	};
    const getResourceLine = (resources: ovhapi.cloud.billingView.RegionalizedResource[]) => {
		return resources.reduce(
			(acc: ResourceLine[], resource) => [
				...acc,
				...resource.components.map((component) => ({ region: resource.region, ...component }))
			],
			[]
		);
	};
    function formatMinutesAsTime(minutes: number): string {
        if (minutes >= 1440) {
            const days: number = Math.floor(minutes / 1440);
            const hours: number = Math.floor((minutes % 1440) / 60);
            const remainingMinutes: number = minutes % 60;
            return `${days}D ${hours}H ${remainingMinutes.toString().padStart(2, '0')}min`;
        } else if (minutes >= 60) {
            const hours: number = Math.floor(minutes / 60);
            const remainingMinutes: number = minutes % 60;
            return `${hours.toString().padStart(2, '0')}H ${remainingMinutes.toString().padStart(2, '0')}min`;
        } else {
            return `${minutes.toString().padStart(2, '0')}min`;
        }
    }

    export let resources: ovhapi.cloud.billingView.RegionalizedResource[];
    const tableData: Writable<ResourceLine[]> = writable([]);

    $: {
        tableData.set(getResourceLine(resources));
    }

    const table = createTable(tableData,  {
        sort: addSortBy({ disableMultiSort: true, toggleOrder: ['asc', 'desc'], initialSortKeys: [{id: 'price', order: 'desc'}] }),
        colOrder: addColumnOrder(),
        page: addPagination({
            initialPageIndex: 0,
            initialPageSize: 5
        })
    });
    const columns = table.createColumns([
        table.column({
            header: 'Region',
            accessor: r => r.region,
        }),
        table.column({
            header: 'Type',
            accessor: r => r.name,
        }),
        table.column({
            header: 'Consommation',
            accessor: r => formatMinutesAsTime(r.quantity.value),
            plugins: {
                sort: {
                    getSortValue: (r) => r.value,
                }
            }
        }),
        table.column({
            header: 'Prix',
            id: 'price',
            accessor: r => `${r.totalPrice.toFixed(2)} €`,
            plugins: {
                sort: {
                    getSortValue: (r) => r.totalPrice,
                }
            }
        }),
    ]);
    const viewModel = table.createViewModel(columns);

</script>

<DataTable {viewModel}/>