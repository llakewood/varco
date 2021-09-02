<script>
  export let title, description;
</script>

<div>
  <h3>{@html title}</h3>
  <p>
    {description}
  </p>
</div>

<style>
  div {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    background-color: honeydew;
    border-radius: 4px;
    box-shadow: 1px 1px 10px grey;
  }

  h3 {
    color: blue;
    font-size: 1em;
    font-weight: 300;
  }
</style>
