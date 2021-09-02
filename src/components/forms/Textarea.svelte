<script>
  import marked from "marked"; //allows markdown
  let value = `Some words are *italic*, some are **bold**`;
</script>

{@html marked(value)}

<textarea bind:value />

<!--

	In cases like these, where the names match, we can also use a shorthand form:

<textarea bind:value></textarea>

-->
<style>
  textarea {
    width: 100%;
    height: 200px;
  }
</style>
