

<template>
  <div class="skeleton" :style="{width,height,background:bg}"></div>
</template>

<script>
export default {
  name: "AppSkeleton",
  props: {
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "30px"
    },
    bg: {
      type: String,
      default: "#ddd"
    }
  }
};
</script>

<style lang="less" scoped>
.skeleton {
  //   width: 100px;
  //   height: 30px;
  //   background-color: #ccc;
}
</style>