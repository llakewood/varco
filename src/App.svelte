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

<Header title={app.title} {navMain} />
<main>
  <svelte:component this={current} />
</main>
<Footer title={app.title} />

<style>
  :global(html),
  :global(body) {
    height: 100%;
  }
  :global(body) {
    display: flex;
    flex-direction: column;
    /* background-image: linear-gradient(crimson, peachpuff); */
    background-image: url("https://images.unsplash.com/photo-1629822097366-0ed4b086f080?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 1280px;
    margin: 0 auto;
  }
  :global(main) {
    flex: 1 0 auto;
  }
  :global(footer) {
    flex-shrink: 0;
  }
</style>
