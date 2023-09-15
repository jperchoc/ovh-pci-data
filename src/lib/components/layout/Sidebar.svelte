<script lang="ts">
	import { getDrawerStore } from "@skeletonlabs/skeleton";

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	import { page } from "$app/stores";
	$: projectId = $page.params.projectId;
	$: hasProjectId = projectId?.length > 0;

	$: links = [
		{ 
			label: "Projects",
			link: `/project`,
			items: []
		},
		{ 
			label: "Dashboard",
			link: `/project/${projectId}`,
			items: []
		},
		{ 
			label: "Storage",
			link: `/project/${projectId}/storage`,
			items: [
				{ 
					label: "Databases",
					link: `/project/${projectId}/database`,
				}
			]
		},
		{ 
			label: "Data Processing",
			link: null,
			items:  [
				{ 
					label: "Job",
					link: `/project/${projectId}/dataprocessing/job`,
				},
				{ 
					label: "Notebook",
					link: `/project/${projectId}/dataprocessing/notebook`,
				}
			]
		},
		{ 
			label: "AI",
			link: `/project/${projectId}/ai/dashboard`,
			items: [
				{ 
					label: "Training",
					link: `/project/${projectId}/ai/training`,
				},
				{ 
					label: "Notebook",
					link: `/project/${projectId}/ai/notebook`,
				},
				{ 
					label: "Deploy",
					link: `/project/${projectId}/ai/deploy`,
				}
			]
		},
		{ 
			label: "Settings",
			link: `/settings`,
			items: []
		}
	]

	const disabledLinkClass = 'text-gray-500 pointer-events-none';
</script>
<nav class="list-nav p-4">
	<ul>
		{#each links as item}
			<li>
				<a href={item.link} class={item.link?.includes(`project/${projectId}`) && !hasProjectId ? disabledLinkClass : ''} on:click={drawerClose}>{item.label}</a>
				<ul class="ml-4 border-l-[1px]">
				{#each item.items as sublink}
					<li>
						<a href={sublink.link} class={sublink.link?.includes(`project/${projectId}`) && !hasProjectId ? disabledLinkClass : ''} on:click={drawerClose}>{sublink.label}</a>
					</li>
				{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>