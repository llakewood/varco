<script>
  async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/`);
    const text = await res.text();

    if (res.ok) {
      let user = JSON.parse(text).results[0];
      return user;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRandomUser();

  function handleClick() {
    promise = getRandomUser();
  }
</script>

<button on:click={handleClick}> generate random user </button>

{#await promise}
  <p>...loading some rando</p>
{:then user}
  <p>
    The user is {user.name.first}
    {user.name.last} ({user.gender}), {user.location.country}
  </p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
