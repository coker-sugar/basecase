<template>
  <div class="home-hot">
    <MyPanel title="人气推荐" subTitle="人气爆款 不容错过">
      <!-- 使用默认插槽 -->
      <ul class="goods-list">
        <li class="item" v-for="item in goods" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" />
            <div class="title ellipsis-2">{{item.name}}</div>
          </router-link>
        </li>
      </ul>
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import { ref } from "vue";
import { getHot } from "@/api";
export default {
  components: {
    MyPanel
  },
  setup(props) {
    const goods = ref([]);
    const getHotList = async () => {
      try {
        const res = await getHot();
        console.log(res);
        if (res.msg == "操作成功") {
            goods.value=res.result.slice(0,4);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getHotList();

    return { goods };
  }
};
</script>

<style lang="less" scoped>
.home-hot {
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