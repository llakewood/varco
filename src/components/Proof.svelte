<script>
  import Gallery from "../components/Gallery.svelte";
  import { onMount } from "svelte";

  let proof = [];

  onMount(async () => {
    const res = await fetch(
      `https://api.cosmicjs.com/v2/buckets/varco-production/objects?pretty=true&query=%7B%22type%22%3A%22articles%22%7D&read_key=JVPdCe3IM5oJV9537KRNr3fCl3xy36ucJQa79WhVg09ApR2YuL&limit=20&props=slug,title,content,metadata,script`
    );
    proof = await res.json();
    proof = proof.objects;
  });
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
