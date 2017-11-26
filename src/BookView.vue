<template>
  <div class="wrapper">
    <h2>{{bookID}} - {{bookAuthor}}</h2>
  </div>
</template>

<script>
import randomName from "node-random-name"
export default {
  data() {
    return {
      bookAuthor: randomName()
    }
  },
  props: ["bookID"]
}
</script>

<style scoped>
.wrapper {
  margin: 0 10vw;
}
</style>
