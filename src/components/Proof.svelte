<script>
  import Gallery from "../components/Gallery.svelte";
  export let proof;
</script>

<div>
  <Gallery items={proof} />
</div>

<style>
  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: calc(var(--spacer) * 1);
    grid-row-gap: calc(var(--spacer) * 4);
  }
</style>
