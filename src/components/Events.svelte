<script>
  //learn more at https://svelte.dev/tutorial/event-modifiers
  // https://svelte.dev/tutorial/component-events
  // https://svelte.dev/tutorial/event-forwarding
  // https://svelte.dev/tutorial/dom-event-forwarding

  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<div on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
