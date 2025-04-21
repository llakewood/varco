<script>
  import YourVariables from "../components/YourVariables.svelte";
  import CTA from "../components/CTA.svelte";
  import Thinking from "../components/Thinking.svelte";
  import Services from "../components/Services.svelte";
  import Proof from "../components/Proof.svelte";
  // import Particles from "../components/Particles.svelte"; 
</script>

<section class="hero">
    <!-- <Particles> -->
      <h1>Because websites are <br>more than just content on a page.</h1>
    <!-- </Particles>     -->
</section> 

<section class="fill">
  <h2>Design Thinking</h2>
  <div><YourVariables /></div>
  <p>
    Using proven approaches, standardized tools, and our advisors’ deep
    experience, we'll help you define your vision and design solutions that
    let you <strong>continuously improve</strong> your products, services and
    processes.
  </p>
  <div>
    <Thinking />
  </div>
  <div>
    <p>
      Better your business by aligning people, process, technology and
      experience.
      <a href="/thinking">See how &rarr;</a>
    </p>
  </div>
</section>

<section>
  <h2>Tech Services</h2>
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
  <h2>Proof of Work</h2>
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


  h2 {
    margin: calc(var(--spacer) * 5) 0 0 0;
  }
  p {
    margin: 0 0 calc(var(--spacer) * 5) 0;
  }

  strong {
    color: var(--color-orange);
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

  .hero {
    grid-gap: calc(var(--spacer) * 5);
  }

  a {
    display: block;
    margin: calc(var(--spacer) * 2) 0;
    font-size: 1.5rem;
    border: 0;
    max-width: 200px;
  }

  a:hover:after {
    padding-left: calc(var(--spacer) * 2);
  }


  @media (min-width: 1024px) {
    h2 {
      margin: 0;
    }
  }
</style>
