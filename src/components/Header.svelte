<script>
  import NavMain from "./NavMain.svelte";
  export let title, description, navMain;
</script>

<header>
  <div>
    <h1>{@html title}</h1>
    <h2>{@html description}</h2>
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

  h2 {
    color: #ff3ecc;
    font-size: 1em;
    margin: 0;
  }

  @media (min-width: 640px) {
    header {
      max-width: none;
    }
  }
</style>
