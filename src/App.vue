<template>
  <el-container>
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

.main-wrapper {
  margin-top: 1em;
}
</style>