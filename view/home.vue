<template>
  <el-container>
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../src/components/aside.vue";
export default {
  name: "Home",
  components: {
    Aside,
  },
};
</script>

<style lang='less' scoped>
.el-header {
  background: black;
}
</style>
