<script>
  import NavMain from "./NavMain.svelte";
  export let title, description, navMain;
</script>

<header>
  <h1>{@html title}</h1>
  <p>
    {description}
  </p>
  <NavMain {navMain} />
</header>

<style>
  header {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    header {
      max-width: none;
    }
  }
</style>
