<template>
  <div class="wrapper">
    <h2>Awesome, {{decodeURIComponent(courseID)}}.</h2>
    <div class="searchWrapper">
      <input v-model="bookID" placeholder="Which Book?" />
      <button @click="search"><span class="fa fa-search" /></button>
    </div>
  </div>
</template>

<script>
export default {
  data(props) {
    return {
      courseID: ""
    }
  },
  props: ["courseID", "schoolID"],
  methods: {
    search() {
      this.$router.push(`/bookview/${encodeURIComponent(this.bookID)}`)
    }
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-around;
}

.searchWrapper {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
