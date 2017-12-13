<template>
  <div class="wrapper">
    <h2>Enter your information to see if </h2>
    <div class="searchWrapper">
      <el-form>
        <el-form-item label="Textbook Name">
          <el-input v-model="textbook" />
        </el-form-item>
        <el-form-item label="School Name">
          <el-input v-model="university" />
        </el-form-item>
        <el-form-item label="Course Name">
          <el-input v-model="course" />
        </el-form-item>
        <el-form-item label="Professor Name">
          <el-input v-model="professor" />
        </el-form-item>
        <el-button @click="search" type="primary" :disabled="searchDisabled">SEARCH</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchDisabled() {
      return !(
        this.textbook &&
        this.university &&
        this.course &&
        this.professor
      )
    },
    newURL() {
      return `${decodeURIComponent(this.textbook)}/${decodeURIComponent(
        this.university
      )}/${decodeURIComponent(this.course)}/${decodeURIComponent(
        this.professor
      )}`
    }
  },
  data() {
    return {
      textbook: null,
      university: null,
      course: null,
      professor: null
    }
  },
  methods: {
    search() {
      this.$router.push(`/book/${this.newURL}/`)
    }
  }
}
</script>


<style scoped>
h2 {
  margin-bottom: 1em;
}

.wrapper input {
  width: 40vw;
}

.wrapper button {
  width: 40vw;
}

.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.searchWrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>