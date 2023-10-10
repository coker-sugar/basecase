import vue from "vue"
import vuex from "vuex"

vue.use(vuex)
const store = new vuex.Store({
    state: {
        routes: ""                  // routes
    },
    mutations: {
        // 获取已处理完成的routes数据mutaions 
        onChangeRoutes(state, data) {
            state.routes = data
        }
    }
})

export default store