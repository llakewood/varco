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
    grid-template-columns: 3fr 6fr;
  }

  h1 {
    color: #333e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
  }

  @media (min-width: 640px) {
    header {
      max-width: none;
    }
  }
</style>
