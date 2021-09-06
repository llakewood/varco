<script>
  export let services;
  import List from "./List.svelte";
  let style = true;
</script>

<div>
  <List items={services} classes="service_list" />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>
