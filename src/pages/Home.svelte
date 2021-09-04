<script>
  import YourVariables from "../components/YourVariables.svelte";
  import CTA from "../components/CTA.svelte";
</script>

<section>
  <YourVariables />
  <CTA />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(var(--spacer) * 4);
    align-items: center;
  }

  @media (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: 8fr 4fr;
      grid-gap: calc(var(--spacer) * 10);
      padding: calc(var(--spacer) * 5) 0;
    }
  }

  @media (min-width: 1024px) {
    section {
      padding: calc(var(--spacer) * 10) 0;
    }
  }
</style>
