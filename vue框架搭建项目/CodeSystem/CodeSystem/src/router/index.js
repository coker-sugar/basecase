import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { name: "login", path: "/login", meta: { title: "login" }, component: () => import("../views/login/index"), hidden: true },
]

const router = new VueRouter({ routes })

export default router