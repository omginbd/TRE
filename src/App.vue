<template>
  <el-container class="app-container">
    <el-header class="header"><my-header /></el-header>
    <el-main class="main-wrapper">
      <router-view></router-view>
    </el-main>
    <el-footer><my-footer /></el-footer>
  </el-container>
</template>

<script>
import Footer from "./Footer"
import Header from "./Header"
export default {
  components: {
    "my-header": Header,
    "my-footer": Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: #262626;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}

.app-container {
  background-color: white;
  max-width: 1000px;
}

.main-wrapper {
  margin-top: 4em;
}
</style>