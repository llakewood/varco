<script>
  import Infinity from "../components/Infinity.svelte";
</script>

<section>
  <h2>Thinking</h2>

  <div>
    <ul>
      <li>People</li>
      <li>Process</li>
      <li>Experience</li>
      <li>Technology</li>
    </ul>
    <div>
      <Infinity />
    </div>
  </div>
</section>

<style>
  h2 {
    margin: 0;
  }
  section {
    grid-gap: var(--spacer);
  }

  div {
    position: relative;
  }

  div div {
    position: absolute;
    top: calc(50% - 64px);
    left: calc(50% - 143px);
  }

  ul {
    /* background-color: var(--color-white); */
    /* border: 1px solid var(--color-black); */
    /* border-radius: calc(var(--spacer) * 5); */
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    text-align: center;
    color: var(--color-white);
    font-size: 2rem;
    /* padding: calc(var(--spacer) * 5) 0; */
    /* grid-gap: calc(var(--spacer) * 5); */
  }

  ul li {
    background: var(--color-blue);
    border: 20px solid var(--color-blue);
    border-radius: 190px 0 0;
    padding: 80px;
  }

  li:hover {
    background-color: var(--color-white);
    color: var(--color-blue);
  }

  ul li + li {
    border-radius: 0 190px 0 0;
    background: var(--color-purple);
    border-color: var(--color-purple);
  }

  li + li:hover {
    color: var(--color-purple);
  }

  ul li + li + li {
    border-radius: 0 0 0 190px;
    background: var(--color-red);
    border-color: var(--color-red);
  }

  li + li + li:hover {
    color: var(--color-red);
  }

  ul li + li + li + li {
    border-radius: 0 0 190px 0;
    background: var(--color-green);
    border-color: var(--color-green);
  }

  li + li + li + li:hover {
    color: var(--color-green);
  }
</style>
