<script lang="ts">
    import { Card, CardContent, CardHeader } from '$components/ui/card';
    import { H2, H3, P, A } from '$components/ui/typography';
</script>

<Card>
    <CardHeader>
        <H2 class="font-bold text-xl text-secondary">Tutorial</H2>
    </CardHeader>
    <CardContent class="p-0 pb-2">
        <H3 class="text-center"><slot name="guideName"></slot></H3>
        <div class="px-6">
            <P class="pb-2"><slot name="guideDescription"></slot></P>
            <A class="text-secondary" href=""><slot name="guideLink"></slot></A>
        </div>
    </CardContent>
</Card>