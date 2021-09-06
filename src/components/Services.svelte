<script>
  export let services;
  import List from "./List.svelte";
</script>

<div>
  <List items={services} nested={true} classes="service_list" />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>
