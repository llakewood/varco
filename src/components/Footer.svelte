<script>
  export let title, description;
</script>

<footer>
  <h2>{@html title}</h2>
  <p>
    {description}
  </p>
</footer>

<style>
  footer {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h2 {
    color: #223e00;
    font-size: 3em;
    font-weight: 300;
  }

  @media (min-width: 640px) {
    footer {
      max-width: none;
    }
  }
</style>
