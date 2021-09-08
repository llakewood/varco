<script>
  let name,
    email,
    phone = undefined;

  const handleSubmit = () => {
    // console.log({ name });
  };
</script>

<div>
  <h2>Free consultation</h2>
  <form
    on:submit={handleSubmit}
    action="https://formspree.io/f/xgerrrgw?success"
    method="POST"
  >
    <label
      >Name
      <input bind:value={name} required name="name" />
    </label>

    <label
      >Email
      <input bind:value={email} required email="email" />
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
    border-top: 1px solid var(--main-light-accent);
    grid-gap: calc(var(--spacer) * 3);
    border-radius: var(--spacer);
  }

  h2,
  button {
    margin: 0;
  }

  span {
    display: block;
  }

  @media (min-width: 1024px) {
    div {
      padding: calc(var(--spacer) * 3);
      border: 1px solid var(--main-light-accent);
      border-radius: var(--spacer);
    }
  }
</style>
