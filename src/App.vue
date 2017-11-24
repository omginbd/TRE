<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h2>This is it baby</h2>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "This is the message!"
    }
  }
}
</script>

<style>
#app {
  color: #42b983;
}
</style>