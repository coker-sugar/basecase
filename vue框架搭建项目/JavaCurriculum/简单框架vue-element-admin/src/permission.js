import router from './router'
import store from './store'
// 显示进度条
import NProgress from 'nprogress' 
// 进度条的样式文件
import 'nprogress/nprogress.css' 
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'
import { asyncRoutes } from '@/router'

// 不显示进度条的旋转动画
NProgress.configure({ showSpinner: false }) 

// 允许不进行重定向的白名单,未登录状态下也可以直接访问
const whiteList = ['/login'] 

// 路由守卫,在跳转前检查用户是否已登录、获取用户权限和生成可访问的路由表。
router.beforeEach(async(to, from, next) => {
  // 开始显示进度条
  NProgress.start()

  // 设置页面标题,根据路由的meta属性中的title字段
  document.title = getPageTitle(to.meta.title)

  // 通过getToken()方法判断用户是否已经获取到了登录凭证。
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果要跳转的路径是'/login'，则重定向到首页('/')
      next({ path: '/' })
      // 结束显示进度条。
      NProgress.done()
    } else {
      // routes数组为空,用户还未拉取过路由表信息,先获取路由表信息
      if (store.getters.routes.length === 0) { 
        // 获取用户信息
        store.dispatch('user/getInfo').then(routesMap => {
          // 生成可访问的路由表，asyncRoutes:总路由表，routesMap:后端返回的路由表
          store.dispatch('permission/generateRoutes', { asyncRoutes, routesMap }).then(addRouters => {
            // 将生成的可访问路由表添加到路由中
            router.addRoutes(addRouters)
            // 路由跳转，设置replace为true，确保路由跳转后不会在浏览器历史记录中留下记录
            next({ ...to, replace: true }) 
          })
        }).catch(err => {
          console.log(err);
        });
      } else {
        next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    /* has no token*/
    // 用户未登录
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果要跳转的路径在白名单(whiteList)中，直接进行路由跳转。
      next()
    } else {
      // 要跳转的路径不在白名单中，将用户重定向到登录页面
      next(`/login?redirect=${to.path}`) // 将要访问的路径作为参数传递给登录页面
      // 结束显示进度条
      NProgress.done()
    }
  }
})

// 路由后置守卫
router.afterEach(() => {
  // 结束显示进度条
  NProgress.done()
})