<template>
  <!-- 1、顶部通栏 -->
  <AppTopNav/>
  <!-- 2、头部区域 -->
  <MyHeader/>

  <!-- 3、主体区域 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view />
  </div>

  <!-- 4、底部区域 -->
  <MyFooter/>
</template>

<script>
import AppTopNav from "@/components/AppTopNav.vue";
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    AppTopNav,
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="less" scoped>
</style>