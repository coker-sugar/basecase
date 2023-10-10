

<template>
  <div class="home-new">
    <MyPanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 使用右侧插槽 -->
      <template #right>
        <AppMore path="/" />
      </template>
      <!-- 使用默认插槽 -->
      <ul v-if="goods.length" class="goods-list">
        <li class="item" v-for="item in goods" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" />
            <div class="title ellipsis">{{item.name}}</div>
            <div class="price">
              ￥{{item.retailPrice}}
              <del>￥{{item.counterPrice}}</del>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- 骨架屏 -->
      <HomeVueSkeleton v-else/>

      <!-- <div v-else class="goods-list">
        <el-skeleton v-for="i in 4" :key="i" style="width: 265px">
          <template #template>
            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 50%" />
              <div
                style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div> -->
    </MyPanel>
  </div>
</template>

<script>
import { ref } from "vue";
import MyPanel from "@/components/MyPanel.vue";
import HomeVueSkeleton from '@/components/Skeleton/HomeVueSkeleton.vue'
import { getNew } from "@/api";
export default {
  components: {
    MyPanel,
    HomeVueSkeleton
  },
  setup(props) {
    const goods = ref([]);
    const getNewList = async () => {
      try {
        const res = await getNew();
        console.log(res);
        if ((res.code = "200")) {
          goods.value = res.data.result.slice(0, 4);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNewList();

    return { goods };
  }
};
</script>

<style lang="less" scoped>
.home-new {
  .goods-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .item {
      width: 265px;
      height: 365px;
      background-color: #f5f5f5;
      img {
        width: 265px;
        height: 265px;
      }
      .hoverShadow();
      .title {
        font-size: 17px;
        text-align: center;
        padding: 15px 25px;
      }
      .price {
        text-align: center;
        font-size: 15px;
        color: @priceColor;
        del {
          color: #666;
        }
      }
    }
  }
}
</style>