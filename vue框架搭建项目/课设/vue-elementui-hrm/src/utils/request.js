import axios from 'axios'
import ElementUI from 'element-ui'
import store from '../store'

// 创建axios实例，以baseURL为基础
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // 超时设置
})

/**
 *  注册 request 响应拦截器，接收config参数并返回该对象
 */
instance.interceptors.request.use(config => {
  // 请求的数据类型为json格式
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  // 设置请求头的token字段
  config.headers.token = store.state.token.token
  return config
}, error => {
  // 返回被拒绝的Promise对象
  return Promise.reject(error)
})

/**
 * 注册 response 响应拦截器，接收response参数并返回该对象
 */
instance.interceptors.response.use(response => {
  const res = response.data
  // 用户状态异常，token无效等特殊情况直接退出登录
  if (res.code === 800 || res.code === 900 || res.code === 1200 || res.code === 1300) {
    // 调用ElementUI组件库中Message组件显示错误消息
    ElementUI.Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 执行退出登录操作，dispatch触发actions中方法
    store.dispatch('staff/logout').then(() => {
      return Promise.reject(res.message)
    })
  } else {
    return res
  }
}, error => {
  ElementUI.Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default instance
