<!-- https://svelte.dev/tutorial/component-this -->
<script>
  let input;

  export function focus() {
    input.focus();
  }
</script>

<input bind:this={input} />
