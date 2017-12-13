<template>
  <div class="wrapper">
    <h2>Find your university.</h2>
    <div class="searchWrapper">
      <input v-model="university" placeholder="Search For Your University" />
      <button @click="search">
        <span class="search-button fa fa-search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      university: ""
    }
  },
  methods: {
    search() {
      this.$router.push(`/course/${window.encodeURIComponent(this.university)}`)
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