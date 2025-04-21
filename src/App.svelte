<!-- Consider:
https://kit.svelte.dev/docs#introduction-before-we-begin
-->
<script>
  // packages
  import page from "page";

  // pages
  import Home from "./pages/Home.svelte";
  import Services from "./pages/Services.svelte";
  import Contact from "./pages/Contact.svelte";
  import Kit from "./pages/Kit.svelte";
  import Thinking from "./pages/Thinking.svelte";
  import Proof from "./pages/Proof.svelte";
  import NotFound from "./pages/NotFound.svelte";

  // components
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import SkipToContent from "./components/SkipToContent.svelte";

  // set default component
  let current = Home;
  export let app, services, proof, navMain;

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  // Advanced tutorial: https://codechips.me/svelte-routing-with-page-js-part-1/
  page("/", () => (current = Home));
  page("/services", () => (current = Services));
  page("/contact", () => (current = Contact));
  page("/kit", () => (current = Kit));
  page("/thinking", () => (current = Thinking));
  page("/proof", () => (current = Proof));
  page("*", () => (current = NotFound));
  // activate router
  page.start();
</script>

<div>
  <SkipToContent />
  <Header title={app.title} {navMain} />
  <main>
    <a name="main" class="skipToTarget">
      <svelte:component this={current} {app} {services} {proof} />
    </a>
  </main>
  <Footer title={app.title} />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500;900&display=swap");

  :global(:root) {
    --color-white: rgb(239, 241, 253);
    --color-black: rgb(25, 25, 20);
    --color-blue: #0081a7;
    --color-red: #f07167;
    --color-green: #00afb9;
    --color-purple: #948098;
    --color-orange: #f7a072;
    --color-yellow: #fdfcdc;
    --main-light-accent: #fed9b7;
    --main-bg-color: var(--main-light-accent);
    --main-text-color: var(--color-black);
    --main-shadow-color: var(--color-black);
    --spacer: 8px;
    --speed: 250ms;
  }

  :global(html),
  :global(body) {
    height: 100%;
  }

  :global(body) {
    color: var(--main-text-color);
    display: flex;
    flex-direction: column;
    padding: 0;
    font-family: "Noto Sans JP";
    font-size: 1rem;
  }

  :global(a),
  :global(a:visited),
  :global(a:active) {
    color: var(--main-text-color);
  }

  :global(a:after) {
    content: "";
    width: 0%;
    background-color: var(--main-light-accent);
    height: var(--spacer);
    transition: width var(--speed) ease-in;
  }

  :global(a:hover:after) {
    width: 100%;
    display: block;
    position: relative;
    bottom: 13px;
    z-index: -1;
  }

  :global(a:hover) {
    text-decoration: none;
  }

  :global(ul) {
    margin: 0;
    padding: 0;
  }

  :global(section) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(var(--spacer));
    align-items: center;
  }

  :global(.teams) {
    color: var(--color-blue);
  }
  :global(.process) {
    color: var(--color-purple);
  }
  :global(.tech) {
    color: var(--color-green);
  }
  :global(.ux) {
    color: var(--color-red);
  }

  @media (min-width: 640px) {
    :global(body) {
      font-size: 1.5rem;
    }
    :global(section) {
      display: grid;
      grid-gap: calc(var(--spacer) * 10);
      padding: calc(var(--spacer) * 5) 0;
    }
  }

  @media (min-width: 1024px) {
    :global(section) {
      padding: calc(var(--spacer) * 8) 0;
    }
  }

  main {
    flex: 1 0 auto;
    position: relative;
  }

  div {
    max-width: 95%;
    margin: 0 auto;
  }

  .skipToTarget:hover:after {
    height: 0;
  }
</style>
