<script>
  export let title;

  let d = new Date();
  let year = d.getFullYear();
</script>

<footer>
  <div>
    <h2><a href="/">{@html title}</a></h2>
    <p>&copy; {year}, All rights reserved.</p>
  </div>
  
  <div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/thinking">Thinking</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/proof">Proof</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(var(--spacer) * 5);
    padding: calc(var(--spacer) * 2) 0;
    flex-shrink: 0;
  }

  @media (min-width: 640px) {
    footer {
      border-top: 1px solid var(--color-black);
      margin-top: calc(var(--spacer) * 5);
      padding: calc(var(--spacer) * 2) 0;
      grid-template-columns: 5fr 3fr 5fr;
      grid-gap: calc(var(--spacer) * 10);
    }
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 100;
    margin: 0;
    padding-bottom: var(--spacer);
  }

  p {
    font-size: 0.8rem;
    margin: 0;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
    list-style-type: "> ";
    list-style-position: inside;
  }

  li:first-child {
    font-weight: 700;
  }

  a:after {
    content: "";
    width: 0%;
    background-color: var(--color-yellow);
    height: var(--spacer);
    transition: width var(--speed) ease-in;
  }
  a:hover:after {
    width: 100%;
    display: block;
    position: relative;
    bottom: var(--spacer);
    z-index: -1;
  }
</style>
