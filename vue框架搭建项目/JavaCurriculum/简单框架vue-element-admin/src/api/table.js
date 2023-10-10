import request from '@/utils/request'
// 将传入的参数发送给服务器，并返回服务器返回的结果。
export function getList(params) {
  return request({
    // url:'CodeRepository/login',
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
// 这些参数将被拼接到请求的URL中作为查询字符串，供服务器端获取和使用。