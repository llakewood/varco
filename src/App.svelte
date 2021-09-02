<!-- Consider:
https://kit.svelte.dev/docs#introduction-before-we-begin
-->
<script>
  import page from "page";

  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Kit from "./pages/Kit.svelte";
  import NotFound from "./pages/NotFound.svelte";

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
  page("/kit", () => (current = Kit));
  page("*", () => (current = NotFound));
  // activate router
  page.start();
</script>

<Header {...app} {navMain} />
<main>
  <svelte:component this={current} />
</main>
<Footer {...app} />
