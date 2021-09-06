<script>
  import Infinity from "../components/Infinity.svelte";
</script>

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

<style>
  div {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  div div {
    position: absolute;
    top: calc(50% - 64px);
    left: calc(50% - 143px);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    text-align: center;
    color: var(--color-white);
    font-size: 2rem;
    grid-column: 2 / -2;
  }

  ul li {
    background: var(--color-blue);
    border: 20px solid var(--color-blue);
    border-radius: 10px 0 0;
    padding: 80px;
  }

  li:hover {
    background-color: var(--color-white);
    color: var(--color-blue);
  }

  ul li + li {
    border-radius: 0 10px 0 0;
    background: var(--color-purple);
    border-color: var(--color-purple);
  }

  li + li:hover {
    color: var(--color-purple);
  }

  ul li + li + li {
    border-radius: 0 0 0 10px;
    background: var(--color-red);
    border-color: var(--color-red);
  }

  li + li + li:hover {
    color: var(--color-red);
  }

  ul li + li + li + li {
    border-radius: 0 0 10px 0;
    background: var(--color-green);
    border-color: var(--color-green);
  }

  li + li + li + li:hover {
    color: var(--color-green);
  }
</style>
