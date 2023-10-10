<template>
  <div class="my-header w">
    <!-- 上面区域 -->
    <div class="header-top">
      <!-- logo -->
      <h1 class="logo">
        <router-link to="/"></router-link>
      </h1>
      <!-- 搜索-->
      <div class="center">
        <div class="center-search">
          <input type="text" name id placeholder="618...." />
          <button class="search-btn">搜索</button>
        </div>
        <!-- 搜索下面的导航 -->
        <ul class="center-navs">
          <li>
            <a href="#">美食</a>
          </li>
          <li>
            <a href="#">餐厨</a>
          </li>
          <li>
            <a href="#">艺术</a>
          </li>
          <li>
            <a href="#">电器</a>
          </li>
          <li>
            <a href="#">居家</a>
          </li>
          <li>
            <a href="#">洗护</a>
          </li>
          <li>
            <a href="#">孕婴</a>
          </li>
          <li>
            <a href="#">服装</a>
          </li>
          <li>
            <a href="#">杂货</a>
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <div class="cart">
        <a href="##">
          <i class="iconfont icon-cart"></i>
          购物车
          <em>2</em>
        </a>
      </div>
    </div>

    <!-- 二级导航 -->
    <AppHeaderNav />
  </div>
</template>

<script>
import AppHeaderNav from "./AppHeaderNav.vue";
import { useStore } from "vuex";
export default {
  components: {
    AppHeaderNav
  },
  setup(props) {
    const store = useStore();
    // 触发action
    store.dispatch('category/getAllCategory');
  }
};
</script>

<style lang="less" scoped>
.my-header {
  height: 120px;
  padding: 25px 0 0 0;
  background-color: #fff;
  .header-top {
    display: flex;
    .logo {
      width: 330px;
      height: 60px;
      a {
        display: inline-block;
        height: 60px;
        width: 100%;
        background: url("../assets/images/logo.webp") no-repeat 0 -298px;
      }
    }
    .center {
      flex: 1;
      .center-search {
        width: 540px;
        height: 35px;
        input {
          width: 440px;
          height: 35px;
          border: 1px solid @xtxColor;
          border-radius: 20px 0 0 20px;
          padding-left: 15px;
          box-sizing: border-box;
        }
        .search-btn {
          float: right;
          width: 100px;
          height: 35px;
          color: #fff;
          background-color: @xtxColor;
          border-radius: 0 20px 20px 0;
          border: 0;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .center-navs {
        width: 540px;
        li {
          float: left;
          height: 32px;
          padding: 5px;
          a {
            padding: 0 5px;
            border-right: 1px solid #ccc;
            &:hover {
              color: @xtxColor;
            }
          }
        }
        li:last-child a {
          border-right: 0;
        }
      }
    }
    .cart {
      box-sizing: border-box;
      width: 150px;
      height: 35px;
      line-height: 32px;
      border-radius: 20px;
      border: 1px solid @xtxColor;
      font-size: 15px;
      text-align: center;

      &:hover {
        background-color: #f5f3ef;
      }
      a {
        color: @xtxColor;
      }
      i {
        // font-size: 16px;
        color: @xtxColor;
      }
      em {
        color: #fff;
        background-color: red;
        border-radius: 50%;
        padding: 5px;
        display: inline-block;
        width: 11px;
        height: 9px;
        line-height: 10px;
        font-size: 10px;
        // padding: 2px 5px;
      }
    }
  }
}
</style>