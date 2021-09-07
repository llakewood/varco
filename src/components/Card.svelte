<script>
  export let title, slug, metadata;
</script>

<a href={slug}>
  <figure>
    <img src={metadata.image.url} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
  {metadata.bumper} &rarr;
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
  }
</style>
