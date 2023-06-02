<script>

	import { page } from "$app/stores";

    const nav = [
        {
            label: 'Databases',
            href: `/project/${$page.params.projectId}/database`
        },
        {
            label: 'Dataprocessing - Jobs',
            href: `/project/${$page.params.projectId}/dataprocessing/job`
        },
        {
            label: 'Dataprocessing - Spark',
            href: `/project/${$page.params.projectId}/dataprocessing/notebook`
        },
        {
            label: 'AI - Notebook',
            href: `/project/${$page.params.projectId}/ai/notebook`
        },
        {
            label: 'AI - Training',
            href: `/project/${$page.params.projectId}/ai/training`
        },
        {
            label: 'AI - Deploy',
            href: `/project/${$page.params.projectId}/ai/deploy`
        },
    ]

</script>
<header>
    <nav>
        <ul>
            {#each nav as link}
                <li>
                    <a href={link.href} class:active={link.href === $page.url.pathname}>{link.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<slot />

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        }

        li {
        float: left;
        }

        li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        }

        /* Change the link color to #111 (black) on hover */
        li a:hover {
        background-color: #111;
        }
        .active {
        background-color: #04AA6D;
        }
</style>