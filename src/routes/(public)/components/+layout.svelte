<script lang="ts">
	import { DocsSidebarNav } from "$components/base/nav";
	import type { SidebarNavItem } from "$types/nav";
    import navStore from "$stores/nav";

    navStore.set([{
        title: 'Components',
        items: [
            {
                title: 'Typography',
                href: '/components#typography',
                items: []
            },
            {
                title: 'Accordion',
                href: '/components#accordion',
                items: []
            },
            {
                title: 'Alert',
                href: '/components#alert',
                items: []
            },
            {
                title: 'Alert Dialog',
                href: '/components#alert-dialog',
                items: []
            },
            {
                title: 'Aspect Ratio',
                href: '/components#aspect-ratio',
                items: []
            },
            {
                title: 'Avatar',
                href: '/components#avatar',
                items: []
            },
            {
                title: 'Badge',
                href: '/components#badge',
                items: []
            },
            {
                title: 'Button',
                href: '/components#button',
                items: []
            },
            {
                title: 'Card',
                href: '/components#card',
                items: []
            },
            {
                title: 'Checkbox',
                href: '/components#checkbox',
                items: []
            },
            {
                title: 'Collapsible',
                href: '/components#collapsible',
                items: []
            },
            {
                title: 'Datatable',
                href: '/components#data-table',
                items: []
            },
            {
                title: 'Dialog',
                href: '/components#dialog',
                items: []
            },
            {
                title: 'Hover Card',
                href: '/components#hover-card',
                items: []
            },
            {
                title: 'Input',
                href: '/components#input',
                items: []
            },
            {
                title: 'Label',
                href: '/components#label',
                items: []
            },
            {
                title: 'Progress',
                href: '/components#progress',
                items: []
            }, {
                title: 'Radio Group',
                href: '/components#radio-group',
                items: []
            }, {
                title: 'Separator',
                href: '/components#separator',
                items: []
            }, {
                title: 'Sheet',
                href: '/components#sheet',
                items: []
            }, {
                title: 'Skeleton',
                href: '/components#skeleton',
                items: []
            }, {
                title: 'Slider',
                href: '/components#slider',
                items: []
            }, {
                title: 'Switch',
                href: '/components#switch',
                items: []
            }, {
                title: 'Table',
                href: '/components#table',
                items: []
            }, {
                title: 'Tabs',
                href: '/components#tabs',
                items: []
            }, {
                title: 'Textarea',
                href: '/components#textarea',
                items: []
            }, {
                title: 'Toggle',
                href: '/components#toggle',
                items: []
            }, {
                title: 'Tooltip',
                href: '/components#tooltip',
                items: []
            },
        ]
    }
]);

</script>
<div
	class="max-w-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]"
>
	<aside
		class="bg-sidebarbg fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem-1px)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block pl-4"
	>
		<div class="py-4 px-4">
			<DocsSidebarNav />
		</div>
	</aside>
    <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]  px-2 md:px-0 md:pr-6 lg:pr-10 ">
        <div class="mx-auto w-full min-w-0">
            <slot />
        </div>
    </main>
</div>