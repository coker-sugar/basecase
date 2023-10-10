import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入vue-router
import store from '../store'
import { getStaffMenu } from '../api/menu'

// 解决当重复跳转一个路由的报错问题
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter) // 全局引入路由

// 静态路由
const routes = [{
  path: '/login', name: 'login', component: () => import('../views/login')
}]

// router实例，管理应用的路由跳转和导航功能
const router = new VueRouter({
  mode: 'history', // 此模式下，url不出现"#"——>使url更干净
  routes // 记住前面的属性是routes(路线)，而不是routers(路由器)，不然<router-view>的内容不会显示
})

// 重置路由
export const resetRouter = () => {
  router.matcher = new VueRouter({
    mode: 'history', routes
  })
}

// 设置动态路由,刷新页面，会重置路由
export const setDynamicRoute = (menuList) => {
  const dynamicRoute = {
    path: '/',
    // 包括侧边栏，顶部，标签组件
    component: () => import('../views/Main'),
    children: []
  }
  // 遍历menuList菜单，添加添加菜单到dynamicRoute的children中：菜单的主标题
  menuList.forEach((menu) => {
    const route = {
      name: menu.code,
      path: menu.code,
      component: () => import('../views/' + menu.code),
      children: []
    }
    // 判断是否有子菜单：菜单的孩子
    if (menu.children.length > 0) {
      menu.children.forEach((subMenu) => {
        route.children.push({
          name: subMenu.code,
          path: subMenu.code,
          component: () => import('../views/' + menu.code + '/' + subMenu.code),
          children: []
        })
      })
    }
    dynamicRoute.children.push(route)
  })
  dynamicRoute.children.push(
    // 将该路由放入到home页面中
    {
      path: '/',
      component: () => import('../views/home')
    },
    // 404页面
    {
      path: '*',
      component: () => import('../views/error')
    })

  router.addRoute(dynamicRoute) // addRoute()只负责添加路由，但不去重
}

// 路由守卫
router.beforeEach((to, from, next) => {
  // 如果有匹配的路由，则直接跳转
  if (to.matched.length === 0) {
    // 如果token存在，则说明已经登录，否则回到登录页面
    if (store.state.token.token) {
      // 请求菜单数据
      getStaffMenu().then(response => {
        if (response.code === 200) {
          const menuList = response.data
          // 任何人都可访问主页
          menuList.push({
            id: 0,
            code: 'home',
            name: '首页',
            icon: 's-home',
            path: '/home',
            children: []
          })
          // 设置动态路由
          setDynamicRoute(menuList)
          // 设置菜单
          store.commit('menu/SET_MENU', menuList)
        }
      })
    } else {
      next({ name: 'login' })
    }
  }
  next()
})

export default router // 对外暴露
