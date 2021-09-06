<script>
  export let services, proof;
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
  <div>
    <p>
      Using proven approaches, a set of standardized tools and our advisors’
      deep experience, we can provide you with vision and implementation options
      that can help you continuously improve your products, services and
      processes.
    </p>
  </div>
  <Thinking {services} />
</section>

<section>
  <h2>Services</h2>
  <div>
    <p>
      Our human-centered approach helps organizations modernize planning,
      research & development, delivery, monitoring and management of traditional
      and digital workflows.
    </p>
  </div>
  <Services {services} />
</section>

<section>
  <h2>Proof</h2>
  <div>
    <p>
      Learn about how these concepts are helping real organizations work better
      together to succeed in their mission and innovate for the future.
    </p>
  </div>
  <Proof {proof} />
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
    margin-top: calc(var(--spacer) * 5);
  }

  section {
    grid-gap: var(--spacer);
    align-items: start;
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
