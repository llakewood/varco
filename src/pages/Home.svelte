<script>
  export let services;
  import YourVariables from "../components/YourVariables.svelte";
  import CTA from "../components/CTA.svelte";
  import Thinking from "../components/Thinking.svelte";
  import Services from "../components/Services.svelte";
  import Proof from "../components/Proof.svelte";
  // import Qbert from "../components/Qbert.svelte";
</script>

<section class="hero">
  <YourVariables />
  <CTA />
</section>

<section>
  <h2>Thinking</h2>
  <Thinking />
</section>

<section>
  <h2>Services</h2>
  <Services {services} />
</section>

<Proof />

<!-- Qbert /-->
<style>
  .hero {
    grid-template-columns: 8fr 4fr;
    grid-gap: calc(var(--spacer) * 4);
  }

  h2 {
    margin: 0;
  }

  section {
    grid-gap: var(--spacer);
  }
</style>
