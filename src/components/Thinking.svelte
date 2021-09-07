<script>
  import Infinity from "../components/Infinity.svelte";
  import { onMount } from "svelte";

  let pillars = [];

  onMount(async () => {
    const res = await fetch(
      `https://api.cosmicjs.com/v2/buckets/varco-production/objects?pretty=true&query=%7B%22type%22%3A%22pillars%22%7D&read_key=JVPdCe3IM5oJV9537KRNr3fCl3xy36ucJQa79WhVg09ApR2YuL&limit=20&props=slug,title,content`
    );
    pillars = await res.json();
    pillars = pillars.objects;
  });
</script>

<div>
  <ul>
    {#each pillars as item, i}
      <li>
        {item.title}
      </li>
    {/each}
  </ul>
  <div>
    <Infinity />
  </div>
</div>

<style>
  div {
    position: relative;
    display: grid;
    /* grid-template-columns: repeat(12, 1fr); */
  }

  div div {
    position: absolute;
    top: calc(50% - 64px);
    left: calc(50% - 143px);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    text-align: center;
    color: var(--color-white);
    font-size: 2rem;
  }

  ul li {
    background: var(--color-blue);
    border: 20px solid var(--color-blue);
    border-radius: 10px 0 0;
    padding: 80px;
  }

  li:hover {
    background-color: var(--color-white);
    color: var(--color-blue);
  }

  ul li + li {
    border-radius: 0 10px 0 0;
    background: var(--color-purple);
    border-color: var(--color-purple);
  }

  li + li:hover {
    color: var(--color-purple);
  }

  ul li + li + li {
    border-radius: 0 0 0 10px;
    background: var(--color-red);
    border-color: var(--color-red);
  }

  li + li + li:hover {
    color: var(--color-red);
  }

  ul li + li + li + li {
    border-radius: 0 0 10px 0;
    background: var(--color-green);
    border-color: var(--color-green);
  }

  li + li + li + li:hover {
    color: var(--color-green);
  }
</style>
