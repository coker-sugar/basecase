<template>
  <div class="home w">
    <!-- 轮播图 -->
    <HomeBanner/>

    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 产品区块 -->
    <HomeProduct />
    
  </div>
</template>

<script>
import HomeBanner from './HomeBanner.vue'
import HomeNew from './HomeNew.vue'
import HomeHot from './HomeHot.vue'
import HomeProduct from './HomeProduct.vue'
export default {
    components:{
        HomeBanner,
        HomeNew,
        HomeHot,
        HomeProduct
    }
};
</script>

<style lang="less" scoped>
</style>