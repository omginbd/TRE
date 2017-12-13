<template>
  <div class="wrapper">
    <router-link to="/"><img src="/res/tre-logo.png" /></router-link>
    <div class="login-buttons">
      <el-button>Login</el-button>
      <el-button>Sign Up</el-button>
    </div>
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

.wrapper {
  align-items: center;
  display: flex;
  flex-direction: row;
}
</style>
