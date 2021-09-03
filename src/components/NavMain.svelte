<script>
  export let navMain;
  console.log(navMain);
</script>

<ul>
  {#each navMain as item, i (item.id)}
    <li>
      <a href={item.to}>
        {item.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    padding: 8px;
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: none;
    border-bottom: 2px solid peachpuff;
    padding-bottom: 8px;
  }
</style>
