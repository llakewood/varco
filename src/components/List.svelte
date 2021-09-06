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
              <a class={item.name.toLowerCase()} href={child.to}>
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

  a:hover:after {
    display: none;
  }

  .service_list li ul li {
    list-style-type: "> ";
    font-weight: 300;
  }

  .service_list li ul li a:hover {
    color: var(--color-white);
    background-color: var(--color-blue);
  }

  .service_list li ul li a.process:hover {
    background-color: var(--color-purple);
  }

  .service_list li ul li a.experience:hover {
    background-color: var(--color-red);
  }

  .service_list li ul li a.technology:hover {
    background-color: var(--color-green);
  }
</style>
