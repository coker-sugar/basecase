import router from "./index"
import Layout from "../layout/index"
import NProgress from 'nprogress' // 显示页面加载进度 progress bar

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const filterRoutes = ["/login"]   // 需要过滤掉的路由
router.beforeEach((to, from, next) => {
    // start progress bar
    NProgress.start()

    // 获取路由 meta 中的title，并设置给页面标题
    document.title = "Code Acquisition(" + to.meta.title + ")"

    // 若跳转至login，不需判断，直接跳转
    if(filterRoutes.indexOf(to.path) !== -1) {
        next()
        return false
    }

    // 有时候重启项目，本地存储的信息还在，再打开login和主页都打不开，会出现浏览器空白的情况
    // window.localStorage.removeItem("userInfo")

    // 登录后拿到的所有路由
    // console.log(router.options.routes)

    if(router.options.routes.length == 1) {
        // 获取token和原始路由数组
        const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) ?? ""
        
        // 当token和原始路由都存在的时候
        if(userInfo.token && userInfo.routes) onFilterRoutes(to, next, userInfo.routes)  // 执行路由过滤和跳转
        else {
            next({ path: "/login", replace: true })
        }
    } else next()
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})

// 路由拼接
function loadView(view) {
    return () => import(`@/views/${ view }`)
}

// 路由过滤和跳转
async function onFilterRoutes(to, next, e) {
    const routes = await filterASyncRoutes(e)    // 路由过滤
    routes.sort((a, b) => a['id'] - b['id'])
    routes.forEach(item => {
        router.options.routes.push(item)
        router.addRoute(item)
    })
    next({ ...to, replace: true })
}

// 路由过滤   遍历路由 转换为组件对象和路径
function filterASyncRoutes(data) {
    const routes = data.filter(item => {
        if(item["component"] === "Layout") item.component = Layout
        else item["component"] = loadView(item["component"])
        // 路由递归，转换组件对象和路径
        if(item["children"] && item["children"].length > 0) item["children"] = filterASyncRoutes(item.children)
        return true
    })
    return routes
}