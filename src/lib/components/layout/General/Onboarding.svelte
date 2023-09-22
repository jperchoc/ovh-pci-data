<script lang="ts">
    import { Button }  from '$components/ui/button';
    import {H1, H2, H3, P} from '$components/ui/typography';

</script>
<div class="flex flex-col items-center">
    <div class = "pb-3"><slot name="image"></slot></div>
    <H1 class = "pb-3 text-center"><slot name="title"></slot></H1>
    <H2 class = "pb-3 text-center"><slot name="subtitle"></slot></H2>
    <P class="text-justify pb-3"><slot name="paragraphe"></slot></P>
    <Button><slot name="actionLink"></slot></Button>
</div>