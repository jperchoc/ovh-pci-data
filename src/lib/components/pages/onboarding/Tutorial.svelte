<script lang="ts">
	import { H2, H3, P, A } from '$components/ui/typography';
</script>

<div class="px-2 py-2 border-b border-l border-r">
	<H3><slot name="guideName" /></H3>
	<P class="pb-2"><slot name="guideDescription" /></P>
	<A href=""><slot name="guideLink" /></A>
</div>
