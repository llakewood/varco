<script>
  let name,
    email = undefined;

  const handleSubmit = () => {
    console.log({ name });
  };
</script>

<div>
  <h2>Free consultation</h2>
  <p>
    Better your business by aligning people, process, technology and experience.
    Learn how today!
  </p>
  <form on:submit={handleSubmit} action="#?success">
    <label
      >Name
      <input bind:value={name} required />
    </label>

    <label
      >Email
      <input bind:value={email} required />
    </label>

    <span>
      {#if name}
        Confirm: {name}
      {/if}

      {#if email}
        , {email}
      {/if}
    </span>

    <button>Get started</button>
  </form>
</div>

<style>
  div {
    display: grid;
    border: 1px solid var(--color-purple);
    padding: calc(var(--spacer) * 3);
    grid-gap: calc(var(--spacer) * 3);
    border-radius: var(--spacer);
  }

  p,
  h2,
  button {
    margin: 0;
  }

  span {
    display: block;
  }
</style>
