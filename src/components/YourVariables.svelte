<script>
  const variables = {
    pillars: ["people", "process", "experience", "tech"],
    traits: [
      "digitial transformation",
      "mentorship",
      "leadership",
      "creative solutions",
      "automation",
      "security",
      "strategy",
      "modern tools",
      "the ability to innovate",
    ],
  };

  const randoVar = (v) => {
    return v[Math.floor(Math.random() * v.length)];
  };

  let pillar = randoVar(variables.pillars);
  let trait = randoVar(variables.traits);
  let needs;

  const grammar = () => {
    needs = pillar == "people" ? "need" : "needs";
  };

  const handleClick = () => {
    pillar = randoVar(variables.pillars);
    trait = randoVar(variables.traits);
    grammar();
  };
  grammar();
</script>

<div role="region" aria-live="polite">
  <h1>
    Your <span>{pillar}</span>
    {needs}
    <span>{trait}</span>.
  </h1>
  <div>
    <a href="/services">We can help you put that in place.</a>
    <button on:click={handleClick}>Refresh</button>
  </div>
</div>

<style>
  h1 {
    font-size: 40px;
    margin: calc(var(--spacer) * 1);
  }
  span:first-child {
    color: var(--color-purple);
  }
  span:last-child {
    color: var(--color-green);
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 70px;
      margin: calc(var(--spacer) * 2) 0;
    }
  }
</style>
