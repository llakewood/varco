<script>
  export let title, description;
</script>

<footer>
  <div>
    <h2>{@html title}</h2>
    <p>
      {description}
    </p>
  </div>
  <div>&copy; {@html title} 2021</div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 3fr 6fr;
  }

  h2 {
    color: #333e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    margin: 0;
  }

  @media (min-width: 640px) {
    footer {
      max-width: none;
    }
  }
</style>
