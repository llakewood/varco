<!-- Route.svelte -->
<script>
  import { register, activeRoute } from "./Router.svelte";

  export let path = "/";
  export let component = null;

  // define new middleware property
  export let middleware = [];

  let params = {};

  // pass in middlewares to Router.
  register({ path, component, middleware });

  $: if ($activeRoute.path === path) {
    params = $activeRoute.params;
  }
</script>

{#if $activeRoute.path === path}
  {#if $activeRoute.component}
    <svelte:component
      this={$activeRoute.component}
      {...$$restProps}
      {...params}
    />
  {:else}
    <slot {params} />
  {/if}
{/if}
