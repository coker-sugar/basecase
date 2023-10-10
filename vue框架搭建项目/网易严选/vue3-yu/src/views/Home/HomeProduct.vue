

<template>
  <div class="home-product">
    <MyPanel v-for='item in products' :key='item.id' :title="item.name">
      <!-- 使用右侧插槽 -->
      <template #right>
        <div class="sub">
          <router-link v-for='sub in item.children' :key='sub.id'  to="/">{{sub.name}}</router-link>
          
        </div>
        <AppMore />
      </template>

      <div class="goods">
        <!-- 左侧-->
        <router-link class="left" to="/">
          <img :src="item.picture" />
        </router-link>
        <!-- 右侧 -->
        <div class="right">
          <ul class="goods-list">
            <li v-for="good in item.goods" :key="good.id">
              <MyGoodsItem :good='good'/>
            </li>
          </ul>
        </div>
      </div>
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import MyGoodsItem from "@/components/MyGoodsItem.vue";
import { getProducts } from "@/api";
import {ref} from 'vue'
export default {
  components: {
    MyPanel,
    MyGoodsItem
  },
  setup(props) {
    const products = ref([]);
    const getProduct = async () => {
      try {
        const res = await getProducts();
        console.log(res);
        if(res.msg=='操作成功'){
          products.value=res.result;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();

    return { products };
  }
};
</script>

<style lang="less" scoped>
.home-product {
  background-color: #fff;
  padding-bottom: 40px;
  .sub {
    a {
      font-size: 16px;
      padding: 2px 10px;
      border-radius: 4px;
      margin-right: 0 7px;
      &:hover {
        background-color: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 40px;
      }
    }
  }

  .goods {
    height: 610px;
    display: flex;

    .left {
      width: 240px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>