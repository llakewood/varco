<script>
  import { onInterval } from "../utils.js";

  const variables = {
    pillars: ["people", "process", "experience", "technology"],
    traits: [
      "accessibility",
      "automation",
      "creativity",
      "digitial transformation",
      "design",
      "leadership",
      "mentorship",
      "monitoring",
      "new ways of working",
      "security",
      "strategy",
      "to innovate",
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
    Your <span class={pillar}>{pillar}</span>
    {needs}
    <span>{trait}</span>.
  </h1>
  <div>
    <p>
      Better your business by aligning people, process, technology and
      experience.
      <a href="/thinking">See how &rarr;</a>
    </p>
  </div>
</div>

<style>
  h1 {
    font-size: 40px;
    margin: calc(var(--spacer) * 1);
    letter-spacing: -2px;
    line-height: 40px;
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
