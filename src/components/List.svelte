<!--
  https://svelte.dev/tutorial/each-block-bindings
 -->
<script>
  export let items, classes, nested;
</script>

<ul class={classes}>
  {#each items as item, i}
    <li>
      <a class={item.name.toLowerCase()} href={item.to}>
        {item.name}
      </a>

      {#if item.children && nested}
        <ul>
          {#each item.children as child, i (child.id)}
            <li>
              <a href={child.to}>
                {child.name}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .service_list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    list-style-position: inside;
    grid-column: 2 / -2;
  }
  .service_list li {
    list-style-type: none;
    font-weight: 700;
  }

  .service_list li ul li {
    list-style-type: "> ";
    font-weight: 300;
  }
</style>
