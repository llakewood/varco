<script>
  import List from "./List.svelte";
  import { onMount } from "svelte";

  let services = [];

  onMount(async () => {
    const res = await fetch(
      `https://api.cosmicjs.com/v2/buckets/varco-production/objects?pretty=true&query=%7B%22type%22%3A%22pillars%22%7D&read_key=JVPdCe3IM5oJV9537KRNr3fCl3xy36ucJQa79WhVg09ApR2YuL&limit=20&props=slug,title,content,metadata,`
    );
    services = await res.json();
    services = services.objects;
  });
</script>

<div>
  <List
    items={services}
    nested={true}
    pathRoot="/services/"
    classes="service_list"
  />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>
