export default {
  // 使用时通过模块名称访问
  namespaced: true,
  // 状态对象。存储数据
  state: {
    // 首页是所有员工都可访问的
    menuList: [
      {
        id: 0,
        code: 'home',
        name: '首页',
        icon: 's-home',
        path: '/home',
        children: []
      }
    ]
  },
  // 修改模块状态
  // 管理员的菜单
  mutations: {
    SET_MENU(state, menuList) {
      state.menuList = menuList
    },
    // 员工的菜单
    CLEAR_MENU(state) {
      state.menuList = [
        {
          id: 0,
          code: 'home',
          name: '首页',
          icon: 's-home',
          path: '/home',
          children: []
        }
      ]
    }
  },
  actions: {
  }
}
