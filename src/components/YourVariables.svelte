<script>
  import { onInterval } from "../utils.js";

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

  let counter = 0;
  onInterval(() => handleClick(), 5000);

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
    <button on:click={handleClick}>{counter}</button>
  </div>
</div>

<style>
  h1 {
    font-size: 40px;
    margin: calc(var(--spacer) * 1);
    letter-spacing: -2px;
    line-height: 40px;
  }
  span:first-child {
    color: var(--color-blue);
  }
  span:last-child {
    color: var(--color-orange);
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 70px;
      margin: calc(var(--spacer) * 2) 0;
      line-height: 70px;
    }
  }
</style>
