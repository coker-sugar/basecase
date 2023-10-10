
import {getCategoryList} from '@/api/index'
import {topCategory} from '@/utils/constants'

export default {
    namespaced: true,
    state: () => {
        return {
            cateList:topCategory,// 默认值，如果请求不到数据的时候显示
        }
    },
    mutations: {
        setList(state, payload) {
            state.cateList= payload;
        }
    },
    actions:{
        // 请求后台，加载分类数据
        async getAllCategory({commit}){
            try {
                // 发送请求，请求所有分类类别
                const res=await getCategoryList();
                console.log(res);
                if(res.code==='200'){
                    commit('setList',res.data.cateList)
                }
            } catch (error) {
                console.log(error);
            }
        }

    },
    getters:{
        
    }
}