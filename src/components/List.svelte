<!--
  https://svelte.dev/tutorial/each-block-bindings
 -->
<script>
  import SampleData from "../data/SampleData";
</script>

<ul>
  {#each SampleData.list as item, i (item.id)}
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={item.id}">
        {i + 1}: {item.name}
      </a>
    </li>
  {/each}
</ul>
