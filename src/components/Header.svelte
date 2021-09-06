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
  }

  h1 {
    color: var(--main-text-color);
    font-size: 2rem;
    font-weight: 100;
    margin: 0;
  }

  @media (min-width: 640px) {
    header {
      grid-template-columns: 3fr 6fr;
      padding: calc(var(--spacer) * 2) 0;
    }
    h1 {
      font-size: 2.5rem;
      line-height: 0.9em;
    }
  }
</style>
