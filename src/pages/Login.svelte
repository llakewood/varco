<script>
  import { onMount, onDestroy } from "svelte";
  import page from "page";

  const setupPage = () => {
    for (let [path, route] of Object.entries(routes)) {
      page(path, () => console.log(route));
    }

    // start page.js
    page.start();
  };

  // wire up page.js when component mounts on the dom
  onMount(setupPage);

  // remove page.js click handlers when component is destroyed
  onDestroy(page.stop);
</script>

<h1>Homepage</h1>
