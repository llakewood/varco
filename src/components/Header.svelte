<script>
  import NavMain from "./NavMain.svelte";
  export let title, navMain;
</script>

<header>
  <div>
    <h1><a href="/">{@html title}</a></h1>
  </div>
  <NavMain {navMain} />
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--spacer);
    padding: var(--spacer) 0;
    height: calc(var(--spacer) * 5);
  }

  h1 {
    color: var(--main-text-color);
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }

  @media (min-width: 640px) {
    header {
      grid-template-columns: 3fr 6fr;
      padding: calc(var(--spacer) * 2) 0;
    }
  }
</style>
