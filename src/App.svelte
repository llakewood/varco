<!-- Consider:
https://kit.svelte.dev/docs#introduction-before-we-begin
-->
<script>
  // packages
  import page from "page";

  // pages
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
  import Kit from "./pages/Kit.svelte";
  import Thinking from "./pages/Thinking.svelte";
  import Work from "./pages/Work.svelte";
  import NotFound from "./pages/NotFound.svelte";

  // components
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  // set default component
  let current = Home;
  export let app, navMain;

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  // Advanced tutorial: https://codechips.me/svelte-routing-with-page-js-part-1/
  page("/", () => (current = Home));
  page("/about", () => (current = About));
  page("/contact", () => (current = Contact));
  page("/kit", () => (current = Kit));
  page("/thinking", () => (current = Thinking));
  page("/work", () => (current = Work));
  page("*", () => (current = NotFound));
  // activate router
  page.start();
</script>

<div>
  <Header title={app.title} {navMain} />
  <main>
    <svelte:component this={current} />
  </main>
  <Footer title={app.title} />
</div>

<style>
  :global(:root) {
    --color-white: rgb(239, 241, 253);
    --color-black: rgb(16, 16, 24);
    --color-blue: blue;
    --color-red: crimson;
    --color-green: #279726;
    --color-purple: rebeccapurple;
    --color-orange: peru;
    --color-yellow: yellow;
    --main-bg-color: var(--color-white);
    --main-text-color: var(--color-black);
    --main-shadow-color: var(--color-black);
    --main-light-accent: peachpuff;
    --spacer: 8px;
  }

  :global(html),
  :global(body) {
    height: 100%;
  }
  :global(body) {
    color: var(--main-text-color);
    color: var(--main-text-color);
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  :global(a),
  :global(a:visited),
  :global(a:active) {
    color: var(--main-text-color);
  }

  :global(a:hover) {
    border-bottom: 2px dotted var(--main-text-color);
    text-decoration: none;
    padding-bottom: var(--spacer);
  }

  :global(ul) {
    margin: 0;
    padding: 0;
  }
  main {
    flex: 1 0 auto;
  }

  div {
    max-width: 95%;
    margin: 0 auto;
  }
</style>
