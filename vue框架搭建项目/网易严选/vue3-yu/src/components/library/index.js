import AppBanner from './AppBanner.vue'
import AppMore from './AppMore.vue'
import AppSkeleton from './AppSkeleton.vue'

export default {
    install(app) {
        // 全局注册组件
        app.component(AppBanner.name, AppBanner);
        app.component(AppMore.name, AppMore)
        app.component(AppSkeleton.name, AppSkeleton)

    }
}