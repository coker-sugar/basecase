<template>
  <div class="my-panel w">
    <!-- 头部区域 -->
    <div class="header">
      <h3>
        {{title}}
        <small>{{subTitle}}</small>
      </h3>
      <!-- 插槽 -->
      <slot name="right"/>
    </div>
    <!-- 默认插槽 -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.my-panel{
    background-color: #fff;
    .header{
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3{
            flex: 1;
            font-size: 32px;
            text-align: left;
            font-weight: normal;
            small{
                font-size: 16px;
                color: #999;
                margin-left: 10px;
            }
        }

    }
}
</style>