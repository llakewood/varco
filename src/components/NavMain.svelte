<script>
  export let navMain;
  console.log(navMain);
</script>

<ul>
  {#each navMain as item, i (item.id)}
    <li>
      <a href={item.to}>
        {i + 1}: {item.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding: 8px;
  }
</style>
