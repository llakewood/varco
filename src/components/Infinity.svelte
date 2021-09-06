<div />

<style>
  div {
    position: relative;
    width: 292px;
    height: 100px;
    box-sizing: content-box;
  }
  div:before,
  div:after {
    content: "";
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    border: 20px solid var(--color-yellow);
    border-radius: 60px 60px 0 60px;
    transform: rotate(-45deg);
  }
  div:after {
    left: auto;
    right: 0;
    border-radius: 60px 60px 60px 0;
    transform: rotate(45deg);
  }
</style>
