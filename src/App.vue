<template>
  <div id="app">
    <h1>Textbook Recommendation Engine</h1>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  box-sizing: border-box;
  background-image: url("/dist/book-stack.jpg");
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 5vw;
  margin: 0;
  text-align: center;
}

#app {
  color: #fff;
}
</style>