<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="(item,index) in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="less" scoped>

</style>