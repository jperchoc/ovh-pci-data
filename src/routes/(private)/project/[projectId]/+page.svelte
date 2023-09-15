<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    $: project = data.project;
</script>

<h2>{project.description}</h2>