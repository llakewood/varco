<script>
  import HeroForm from "./forms/HeroForm.svelte";
</script>

<div>
  <h2>Getting Curious?</h2>
  <p>
    If you're picking up what we're layin' down, it would be a pleasure to
    discuss how we can work together.
  </p>
  <p>
    Let's talk about how to take your projects, systems, and business from
    yesterday into tomorrow.
  </p>
  <div><HeroForm /></div>
</div>

<style>
  div {
    display: grid;
    grid-gap: calc(var(--spacer) * 3);
    padding: calc(var(--spacer) * 3);
    border-radius: 8px;
    border: 1px solid var(--color-yellow);
    grid-column: 2 / -2;
    grid-template-columns: repeat(12, 1fr);
  }

  h2,
  p {
    display: grid;
    margin: 0;
    grid-column: 2 / 9;
  }

  div div {
    grid-column: 9 / -2;
    border: 0;
  }

  @media (min-width: 1024px) {
  }
</style>
