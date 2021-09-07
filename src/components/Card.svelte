<script>
  export let title, slug, metadata;
</script>

<a href={slug}>
  <figure>
    <img src={metadata.image.url} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
  <p>{metadata.bumper} &rarr;</p>
</a>

<style>
  figure,
  img {
    width: 100%;
    margin: 0;
    margin: 0 0 8px 0;
  }
  figcaption {
    color: var(--main-text-color);
    font-weight: 700;
  }

  a {
    color: var(--color-red);
    font-size: 1.5rem;
    font-weight: 300;
    border: 0;
    padding: 8px;
  }

  a:hover {
    background-color: var(--color-white);
    box-shadow: 1px 1px 10px var(--color-yellow);
  }
  a:hover:after {
    height: 0;
  }
</style>
