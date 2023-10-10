import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance 创建axios实例
const service = axios.create({
  // baseURL:'http://10.100.76.102:8080/',
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor 请求拦截器,用于在每次发送请求前添加请求头部信息
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 如果存在token，则将 token 添加到请求头部的 authorization 字段中
      config.headers.authorization = getToken()
    }
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器，用于处理接口返回的响应数据
service.interceptors.response.use(
  response => {
    // 获取到返回的响应数据，并赋值给变量res
    const res = response.data
    console.log(response);

    // 如果code不为20000，错误响应，将错误信息显示在页面上
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 当code为50008、50012或50014时，表示token非法、其他客户端登录或token过期（退出了）
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 触发重新登录的操作。弹出一个确认框，提示用户已被登出，并提供重新登录和取消两个选项
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
      // 如果点击了重新登录，则调用store中的user模块的resetToken方法重置token，并重新加载页面。
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      // 返回一个rejected状态的promise对象抛出一个新的错误。
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // 如果响应成功且code为20000，则直接返回响应数据。
      return res
    }
    return res;
  },

  error => {
    // 如果在请求过程中发生了错误（比如网络问题），则会进入error回调函数，并在控制台打印出具体的错误信息。
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 返回一个rejected状态的promise对象抛出该错误
    return Promise.reject(error)
  }
)

export default service