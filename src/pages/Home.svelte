<script>
  import YourVariables from "../components/YourVariables.svelte";
  import CTA from "../components/CTA.svelte";
  import Thinking from "../components/Thinking.svelte";
  import Services from "../components/Services.svelte";
  import Proof from "../components/Proof.svelte";
  import Qbert from "../components/Qbert.svelte";
</script>

<section>
  <YourVariables />
  <CTA />
</section>

<Thinking />

<Services />

<Proof />

<Qbert />

<style>
  section {
    grid-template-columns: 8fr 4fr;
    grid-gap: calc(var(--spacer) * 4);
  }
</style>
