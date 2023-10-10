import { constantRoutes } from '@/router'

// 自定义多维数组包特定对象转一维数组过滤children，将所有键值对中除了children外的属性值提取出来，后端若返回一维数组则直接交由filterAsyncRoutes处理
function MultidimensionalToOnedimensional(routesMap) {
  // 创建空数组存储过滤后的路由对象
  const filterRoutesMap = []
  !function fn(routesMap) {
    // 遍历routesMap
    routesMap.forEach(route => {
      const tmp = {}
      for (const key in route) {
        if (Object.hasOwnProperty.call(route, key)) {
          if (key !== 'children') {
            tmp[key] = route[key]
            // 如果key值等于children，表示当前路由还包含子路由
          } else if (key === 'children') {
            fn(route[key])
          }
        }
      }
      filterRoutesMap.push(tmp)
    })
  }(routesMap)
  return filterRoutesMap
}

// 根据特定条件筛选和处理一个路由数组，并将符合条件的路由对象添加到另一个数组中，routes：所有的路由信息，filterRoutesMap：需要过滤的路由映射列表
export function filterAsyncRoutes(routes, filterRoutesMap) {
  // 存储过滤后的路由信息
  const accessedRoutes = [];
  routes.forEach(route => {
    // 存储过滤的路由
    const tmp = {};
    // 比较数组中的"path"属性与当前迭代的路由的"path"属性是否相等
    if (filterRoutesMap.some(a => a.path == route.path)) {
      for (const key in route) {
        // 检查当前属性是否属于路由对象自身，而不是从原型链继承的。
        if (Object.hasOwnProperty.call(route, key)) {
          if (key !== 'children') {
            tmp[key] = route[key];
          } else if (key === 'children') {
            const tmpC = filterAsyncRoutes(route[key], filterRoutesMap);
            //若temC大于0，将"tmpC"赋值给"tmp"对象的"children"属性。
            (tmpC.length > 0) && (tmp.children = tmpC);
          }
        }
      }
    }
    // 检查"tmp"对象是否具有"path"属性
    tmp.path && accessedRoutes.push(tmp)
  })

  return accessedRoutes
}

const getDefaultState = () => {
  return {
    routes: [],
    addRoutes: []
  }
}
const state = getDefaultState;

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    // 将"constantRoutes"数组和传入的"routes"数组解构后合并成一个新数组
    state.routes = [
      ...constantRoutes,
      ...routes
    ]
  },
  RESET_STATE: state => {
    // 将"state"对象重置为"getDefaultState()"函数返回的默认状态对象
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  generateRoutes({ commit }, { asyncRoutes, routesMap }) {
    return new Promise(resolve => {
      // 将`routesMap`从多维数组转换为一维数组
      const filterRoutesMap = MultidimensionalToOnedimensional(routesMap)
      let accessedRoutes = [
        // 筛选路由返回数组
        ...filterAsyncRoutes(asyncRoutes, filterRoutesMap),
        // 当访问的路由不存在时，将重定向到`'/404'`路径，并将其隐藏。
        { path: '*', redirect: '/404', hidden: true }
      ]
      // 新数组作为路由
      commit('SET_ROUTES', accessedRoutes)
      // 返回一个解析后的Promise对象
      resolve(accessedRoutes)
    })
  },
  resetState({ commit }) {
    // 执行重置路由函数
    return new Promise(resolve => {
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
