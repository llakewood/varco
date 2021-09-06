<script>
  export let services;
  import List from "../components/List.svelte";

  console.log(services);
</script>

<h2>Services</h2>
<div>
  <List items={services} nested={true} classes="service_list" />
</div>
