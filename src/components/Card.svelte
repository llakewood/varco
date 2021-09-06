<script>
  export let name, thumbnail, to, bumper;
</script>

<a href={to}>
  <figure>
    <img src={thumbnail} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
  {bumper} &raquo;
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
