<script lang="ts">

	import { page } from "$app/stores";
    import navStore from "$stores/nav";
	import DocsSidebarNav from "$components/base/nav/DocsSidebarNav.svelte";

    navStore.set([
        {
            title: 'Storage',
            items: [{
                title: 'Databases',
                href: `/project/${$page.params.projectId}/database`,
                items:[]
            }]
        },
        {
            title: 'Dataprocessing',
            items: [
                {
                    title: 'Jobs',
                    href: `/project/${$page.params.projectId}/dataprocessing/job`,
                    items:[]
                },
                {
                    title: 'Notebooks',
                    href: `/project/${$page.params.projectId}/dataprocessing/notebook`,
                    items:[]
                }
            ]
        },
        {
            title: 'AI',
            items: [
                {
                    title: 'Notebooks',
                    href: `/project/${$page.params.projectId}/ai/notebook`,
                    items:[]
                },
                {
                    title: 'Jobs',
                    href: `/project/${$page.params.projectId}/ai/training`,
                    items:[]
                },
                {
                    title: 'Deploy',
                    href: `/project/${$page.params.projectId}/ai/deploy`,
                    items:[]
                }
            ]
        }
    ])

</script>
<!-- <header>
    <nav>
        <ul>
            {#each nav as link}
                <li>
                    <a href={link.href} class:active={$page.url.pathname.startsWith(link.href)}>{link.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header> -->

<div
	class="max-w-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]"
>
	<aside
		class="bg-sidebarbg fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem-1px)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block pl-4"
	>
		<div class="py-4 pr-4">
			<DocsSidebarNav />
		</div>
	</aside>
    <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr] md:pr-6 lg:pr-10 ">
        <div class="mx-auto w-full min-w-0">
            <slot />
        </div>
    </main>
</div>