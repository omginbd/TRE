<template>
  <div class="header">
    <div class="wrapper">
      <router-link to="/"><img src="tre-logo.png" /></router-link>
    </div>
    The Textbook Recommendation Engine
    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-size: 5vw;
  font-weight: 200;
  margin: 0;
  text-align: center;
}

hr {
  margin-top: 1em;
}

.login-buttons {
  margin-left: 2.5em;
}

.wrapper {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.wrapper img {
  margin: 8px 0;
}
</style>
