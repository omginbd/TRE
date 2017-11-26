<template>
  <div class="wrapper">
    <input v-model="university" placeholder="Search For Your University" />
    <button @click="search">
      <span class="search-button fa fa-search" />
    </button>
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
  flex-direction: row;
  height: 80vh;
  justify-content: center;
}
</style>