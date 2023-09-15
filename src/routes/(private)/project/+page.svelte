<script lang="ts">
	import { H1, Lead, A } from "$components/ui/typography";
    import type { PageData } from "./$types";

    export let data: PageData;
    $: projects = data.projects;
</script>

<div class="mx-auto w-full min-w-0">
    <H1>Your PCI Projects</H1>
    <Lead>Click on a project to access the dashboard</Lead>
    {#if projects && projects.length > 0}
        <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
            {#each projects as project}
            <li>
                <A href="/project/{project.project_id}">{project.description}</A>
            </li>
            {/each}
        </ul>
    {:else}
        <p>No project found</p>
    {/if}
</div>