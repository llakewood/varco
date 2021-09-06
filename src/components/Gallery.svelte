<script>
  import Card from "./Card.svelte";
  export let items;
  console.log(items);
</script>

{#each items as item}
  <Card {...item} />
{:else}
  <!-- this block renders when photos.length === 0 -->
  <p>loading...</p>
{/each}
