<script>
  import Card from "./Card.svelte";
  export let items;
</script>

{#each items as item}
  <Card {...item} />
{:else}
  <p>loading...</p>
{/each}
