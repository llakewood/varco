<script>
  import { onMount } from "svelte";
  import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  let ParticlesComponent;

  onMount(async () => {
      const module = await import("svelte-particles");

      ParticlesComponent = module.default;
  });

  let particlesUrl = "../data/Particles.json"; 

  let onParticlesLoaded = event => {
      const particlesContainer = event.detail.particles;
  };

  let particlesInit = async engine => {
      await loadSlim(engine);
  };
</script>

<svelte:component
  this="{ParticlesComponent}"
  id="tsparticles"
  class="foo bar"
  style=""
  url="{particlesUrl}"
  on:particlesLoaded="{onParticlesLoaded}"
  particlesInit="{particlesInit}"
/>