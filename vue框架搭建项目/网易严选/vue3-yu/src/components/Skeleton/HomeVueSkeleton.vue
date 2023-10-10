


<template>
  <div>
      <ul class="goods-list">
          <li class="item" v-for="i in 4" :key='i'>
              <!-- 图片 -->
              <AppSkeleton width='265px' height='265px' bg='#999'/>
              <!-- 名称 -->
              <AppSkeleton width='100px' height='30px' bg='#ccc'/>
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goods-list{
    display: flex;
    justify-content: space-between;
    .item{
        width: 265px;
        height: 365px;
        background-color: #ccc;
    }
}
</style>