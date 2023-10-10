<template>
  <!-- 对传来的数据进行一系列过滤,最终呈现到顶边栏 -->
  <!--面包屑，分隔符为斜杠 -->
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <!-- 过渡动画组件，动画名称breadcrumb -->
    <transition-group name="breadcrumb">
      <!-- 循环渲染levelList数组，以path作为key值 -->
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <!-- 如果redirect属性值为noRedirect或者是数组最后一项，渲染文字标题，并添加no-redirect样式 -->
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <!-- 如果不满足条件，链接跳转，阻止默认的链接行为，调用handleLink方法 -->
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      // 获取与当前路由匹配的路由记录数组,再利用filter过滤保留title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      // 始终保留第一个为Dashboard
      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      }
      // 二次过滤
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    // 判断传入的路由对象是否是一个名为Dashboard的路由
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      // 去前面的空格并转为小写
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    // 构建具有动态参数的路径，以便在程序中进行导航或生成链接。
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      // 解构path
      const { redirect, path } = item
      if (redirect) {
        // 页面重定向
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
