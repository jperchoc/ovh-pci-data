<script lang="ts">
	import { H3 } from '$components/ui/typography';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
</script>

<Card>
	<CardHeader>
		<H3><slot name="title" /></H3>
	</CardHeader>
	<CardContent>
		<div class="flex flex-col items-center pb-4">
			<div><slot name="image" /></div>
			<div class="font-bold"><slot name="link" /></div>
			<div class="pt-2">
				<slot name="badge_run" />
				<slot name="badge_stop" />
			</div>
		</div>
	</CardContent>
</Card>