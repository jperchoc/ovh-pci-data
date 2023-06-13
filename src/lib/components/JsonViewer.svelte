<script lang="ts">
    export let data: any;
</script>

<div class="viewer">
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
<style>
    .viewer {
        background-color: #1f1f1f;
        padding: 5px;
        border-radius: 5px;
    }
    pre {
        font-size: small;
        color: white;
        margin: 0;
        background-color: #1f1f1f;
        max-height: 600px;
        overflow: auto;
    }
</style>