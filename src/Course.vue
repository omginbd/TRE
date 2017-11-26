<template>
  <div class="wrapper">
    <h2>Great, {{decodeURIComponent(schoolID)}}.</h2>
    <div class="searchWrapper">
      <input v-model="courseID" placeholder="Which Course?" />
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
  props: ["schoolID"],
  methods: {
    search() {
      this.$router.push(
        `/book/${encodeURIComponent(this.courseID)}/${encodeURIComponent(
          this.schoolID
        )}`
      )
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