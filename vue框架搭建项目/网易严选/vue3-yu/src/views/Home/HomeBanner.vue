<template>
  <div>
    <!--全局组件 -->
    <AppBanner :list='list'/>
  </div>
</template>

<script>
import {ref} from 'vue'
import {getBanner} from '@/api'
export default {
    setup(props) {
        const list=ref([]);
        getBanner().then(res=>{
            if(res.msg='操作成功'){
                list.value=res.result;
            }
        }).catch(err=>{
            console.log(err);
        })
        

        return {list}
    }
};
</script>

<style lang="less" scoped>
</style>