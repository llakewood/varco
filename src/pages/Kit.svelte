<script>
  export let app;

  import page from "page";

  import Await from "../components/Await.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import Events from "../components/Events.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  // import Keypad from "../components/Keypad.svelte";
  import List from "../components/List.svelte";
  import Login from "../components/Login.svelte";
  import Gallery from "../components/Gallery.svelte";
  import Video from "../components/Video.svelte";

  // Forms
  import Checkbox from "../components/forms/Checkbox.svelte";
  import Input from "../components/forms/Input.svelte";
  import InputField from "../components/forms/Input.svelte";
  import Groups from "../components/forms/Groups.svelte";
  import Range from "../components/forms/Range.svelte";
  import Select from "../components/forms/Select.svelte";
  // import Textarea from "../components/forms/Textarea.svelte";
</script>

<nav></nav>
<main>
  <Await></Await>
  <Button></Button>
  <Events></Events>
  <List></List>
  <Login></Login>
  <Video></Video>
  <Gallery></Gallery>
  <div>
    <Card {...app}></Card>
    <Card {...app}></Card>
    <Card {...app}></Card>
  </div>
  <form>
    <Select></Select>
    <Input></Input>
    <InputField></InputField>
    <Groups></Groups>
    <Range></Range>
    <Checkbox></Checkbox>
    <!-- <Textarea></Textarea> -->
  </form>
</main>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
</style>
