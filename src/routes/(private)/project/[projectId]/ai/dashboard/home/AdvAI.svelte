<script lang="ts">
	import { H3, P } from '$components/ui/typography';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import Avatar from '$components/ui/avatar/avatar.svelte';
</script>

<div class="grid grid-rows-1 grid-flow-col gap-4">
	<div class="col-span-2">
		<Avatar class="mt-2 h-15 w-15"><slot name="image" /></Avatar>
	</div>
	<div class="col-span-2">
		<H3 class="mt-1"><slot name="title" /></H3>
		<P class="mt-2 text-justify"><slot name="details" /></P>
	</div>
</div>