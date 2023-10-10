<template>
  <el-container style="height: 100%">
    <el-aside width="auto" style="box-shadow: 2px 0 6px rgb(0 21 41 / 35%);">
      <!-- 引入侧边栏 -->
      <common-aside/>
    </el-aside>
    <el-container>
       <!-- 引入顶栏 -->
      <el-header>
        <common-header/>
      </el-header>
      <!-- 引入标签栏 -->
      <common-tag/>
       <!-- 路由视图 -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'
import CommonTag from '../components/CommonTag'

export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
}
</script>

<style lang="less">
.el-header {
  background-color:#b8d9f6;
}

.el-main {
  padding-top: 0;
}
</style>
