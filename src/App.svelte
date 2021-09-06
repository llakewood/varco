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
  export let app, services, navMain;

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
    <svelte:component this={current} {app} {services} />
  </main>
  <Footer title={app.title} />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500;900&display=swap");

  :global(:root) {
    --color-white: rgb(239, 241, 253);
    --color-black: rgb(25, 25, 20);
    --color-blue: #174fa0;
    --color-red: #cb3831;
    --color-green: #297443;
    --color-purple: #5b0d5a;
    --color-orange: #ff6013;
    --color-yellow: #faab11;
    --main-light-accent: #f5e8de;
    --main-bg-color: var(--main-light-accent);
    --main-text-color: var(--color-black);
    --main-shadow-color: var(--color-black);
    --spacer: 8px;
  }

  :global(html),
  :global(body) {
    height: 100%;
  }

  :global(*) {
    /* transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1); */
  }
  :global(body) {
    color: var(--main-text-color);
    /* background-color: var(--main-bg-color); */
    display: flex;
    flex-direction: column;
    padding: 0;
    font-family: "Noto Sans JP";
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

  :global(section) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(var(--spacer));
    align-items: center;
  }

  :global(.people) {
    color: var(--color-blue);
  }
  :global(.process) {
    color: var(--color-purple);
  }
  :global(.technology) {
    color: var(--color-green);
  }
  :global(.experience) {
    color: var(--color-red);
  }

  @media (min-width: 640px) {
    :global(section) {
      display: grid;
      grid-gap: calc(var(--spacer) * 10);
      padding: calc(var(--spacer) * 5) 0;
    }
  }

  @media (min-width: 1024px) {
    :global(section) {
      padding: calc(var(--spacer) * 10) 0;
    }
  }

  main {
    flex: 1 0 auto;
  }

  div {
    max-width: 95%;
    margin: 0 auto;
  }
</style>
