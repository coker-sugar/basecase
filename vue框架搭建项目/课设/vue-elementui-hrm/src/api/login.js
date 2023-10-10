import request from '../utils/request'

// 发送登录请求
export const login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
