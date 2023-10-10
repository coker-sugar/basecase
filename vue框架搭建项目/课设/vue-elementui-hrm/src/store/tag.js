export default {
  namespaced: true,
  state: {
    // 获取本地存储的数据作为标签列表，将字符串解析为对象
    tagList: JSON.parse(localStorage.getItem('tagList')) || [{
      id: 0,
      name: '首页',
      path: '/home',
      code: 'home'
    }]
  },
  mutations: {
    // 添加标签
    ADD_TAG(state, menu) {
      // 判断当前点击的是否是首页
      if (menu.code !== 'home') {
        // 判断tag是否存在，若存在就不添加
        const result = state.tagList.findIndex(
          // 若找到相同标签返回该标签在数组中的索引，否则返回-1
          item => item.code === menu.code
        )
        if (result === -1) {
          state.tagList.push(menu)
        }
      }
      // 存字符串到本地存储
      localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    // 关闭标签
    CLOSE_TAG(state, menu) {
      state.tagList = state.tagList.filter(item => item.code !== menu.code)
      localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    // 清空标签
    CLEAR_TAG(state) {
      state.tagList = [{
        id: 0,
        name: '首页',
        path: '/home',
        code: 'home'
      }]
    }
  }
}
