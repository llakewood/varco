<script>
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

<section class="fill">
  <h2>Thinking</h2>
  <p>
    Using proven approaches, a set of standardized tools and our advisors’ deep
    experience, we can provide you with vision and implementation options that
    can help you continuously improve your products, services and processes.
  </p>
  <div>
    <Thinking />
  </div>
</section>

<section>
  <h2>Services</h2>
  <p>
    Our human-centered approach helps organizations modernize planning, research
    & development, delivery, monitoring and management of traditional and
    digital workflows.
  </p>
  <div>
    <Services />
  </div>
</section>

<section class="fill">
  <h2>Proof</h2>
  <p>
    Learn about how these concepts are helping real organizations work better
    together to succeed in their mission and innovate for the future.
  </p>
  <div>
    <Proof />
  </div>
</section>

<section>
  <CTA />
</section>

<!-- Qbert /-->
<style>
  .hero {
    grid-gap: calc(var(--spacer) * 5);
  }

  h2 {
    margin: calc(var(--spacer) * 5) 0 0 0;
  }
  p {
    margin: 0 0 calc(var(--spacer) * 5) 0;
  }

  section {
    grid-gap: var(--spacer);
    align-items: start;
    grid-template-columns: repeat(12, 1fr);
  }

  section * {
    grid-column: 2 / -2;
  }

  .fill {
    background-color: var(--main-light-accent);
  }

  @media (min-width: 1024px) {
    .hero {
      grid-template-columns: 6fr 6fr;
      grid-gap: calc(var(--spacer) * 4);
    }
    h2 {
      margin: 0;
    }
  }
</style>
