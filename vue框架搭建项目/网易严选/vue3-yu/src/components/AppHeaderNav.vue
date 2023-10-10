<template>
  <ul class="app-header-nav">
    <li class="item">
      <RouterLink class="link" to="/">首页</RouterLink>
    </li>
    <li
      class="item"
      v-for="item in list"
      :key="item.id"
      @mouseenter="show(item)"
      @mouseleave="hide(item)"
    >
      <RouterLink class="link" :to="'/category/'+item.id" @click="hide(item)">{{item.name}}</RouterLink>
      <!-- 弹出层 -->
      <div class="layer" :class="{active:item.open}">
        <ul>
          <li v-for="ele in item.subCateGroupList" :key="ele.id">
            <a href="#">
              <img :src="ele.categoryList[0].bannerUrl" alt />
            </a>
            <div>{{ele.name}}</div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup(props) {
    const store = useStore();
    // 从仓库里读取分类列表
    const list = computed(() => {
      return store.state.category.cateList;
    });
    // 鼠标进入显示
    const show = item => {
      item.open = true;
    };
    // 鼠标离开，点击二级菜单后隐藏
    const hide = item => {
      item.open = false;
    };

    return { list, show, hide };
  }
};
</script>

<style lang="less" scoped>
.app-header-nav {
  position: relative;
  clear: both;
  z-index: 999;
  .item {
    float: left;
    padding: 0 10px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    // 选中高亮设置
    .router-link-exact-active {
      color: @xtxColor;
      border-bottom: 2px solid @xtxColor;
    }
    .link {
      padding-bottom: 7px;
      font-size: 15px;
    }
    //划过
    &:hover {
      .link {
        color: @xtxColor;
        border-bottom: 2px solid @xtxColor;
      }
      .layer {
        opacity: 0;
        height: 120px;
      }
      .active {
        opacity: 1;
      }
    }
  }

  .layer {
    position: absolute;
    left: 0;
    top: 42px;
    opacity: 0;
    width: 1100px;
    height: 0;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    overflow: hidden;
    transition: all 0.5s;

    ul {
      display: flex;

      li {
        height: 100px;
        width: 100px;
        text-align: center;
        a {
          border-bottom: 0;
        }
        img {
          width: 50px;
          height: 50px;
          text-align: center;
        }
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
}
</style>