<script>
  /**
   * Component: YourVariables
   * Description: Hero object animating the core pillars of People, Process, UX, and Tech - the loop all aspects of an organization travel around. 
  */

  import { onInterval } from "../utils.js";

  const variables = {
    pillars: ["Teams", "Process", "UX", "Tech"],
    traits: [
      "accessibility",
      "automation",
      "creativity",
      "digitial transformation",
      "design",
      "leadership",
      "mentorship",
      "monitoring",
      "ways of working",
      "security",
      "strategy",
      "innovation",
    ],
  };

  let needs, current;

  const randoVar = (v) => {
    let updated = v[Math.floor(Math.random() * v.length)];
    if (current === updated) {
      randoVar(v);
    } else {
      return updated;
    }
  };

  let pillar = randoVar(variables.pillars);
  let trait = randoVar(variables.traits);

  const grammar = () => {
    needs = pillar == "Teams" ? "need" : "needs";
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
    <span class={pillar.toLowerCase()}>{pillar}</span>
    {needs}
    <span>{trait}</span>.
  </h1>
</div>

<style>
  h1 {
    font-size: 40px;
    margin: calc(var(--spacer) * 1);
    letter-spacing: -2px;
    line-height: 40px;
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
