<script lang="ts">
    import { Button }  from '$components/ui/button';
    import {H1, H2, H3, P} from '$components/ui/typography';

    export let img: {
        src: string,
        alt: string,
    }

</script>
<div class="flex flex-col items-center">
    <img class = "pb-3" src={img.src.toString()} alt={img.alt} /> 
    <H1 class = "pb-3"><slot name="title"></slot></H1>
    <H2 class = "pb-3"><slot name="subtitle"></slot></H2>
    <P class="text-justify pb-3"><slot name="paragraphe"></slot></P>
    <Button><slot name="actionLink"></slot></Button>
</div>