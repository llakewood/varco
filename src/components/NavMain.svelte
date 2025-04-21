<script>
  export let navMain;
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
    justify-content: space-between;
  }

  li {
    padding-bottom: var(--spacer);
    font-weight: 300;
  }

  @media (min-width: 640px) {
    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }
</style>
