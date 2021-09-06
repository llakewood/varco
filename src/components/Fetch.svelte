<script>
  import Gallery from "../components/Gallery.svelte";
  import { onMount } from "svelte";

  let photos = [];

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );
    photos = await res.json();
  });
</script>

<div>
  <Gallery {photos} />
</div>

<style>
  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
</style>
