<script context="module">
  const routes = {};

  export function register(route) {
    routes[route.path] = route;
  }
</script>

<script>
  import { onMount } from "svelte";
  import page from "page";

  onMount(() => console.log(routes));
</script>

<slot />
