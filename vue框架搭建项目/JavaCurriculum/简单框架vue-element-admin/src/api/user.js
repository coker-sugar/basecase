import request from '@/utils/request'

// 模拟数据路由表
const routesMaps = {
  admin: [
    {
        path: '/',
        children: [
            {
                path: 'dashboard'
            }
        ]
    },
    {
      path: '/search',
      children: [
          {
              path: 'search'
          },
      ]
  },
    {
        path: '/example',
        children: [
            {
                path: 'table'
            },
            {
                path: 'tree'
            }
        ]
    },
    {
        path: '/form',
        children: [
            {
                path: 'index'
            }
        ]
    },
    // {
    //     path: '/nested',
    //     children: [
    //         {
    //             path: 'menu1',
    //             children: [
    //                 {
    //                     path: 'menu1-1'
    //                 },
    //                 {
    //                     path: 'menu1-2',
    //                     children: [
    //                         {
    //                             path: 'menu1-2-1'
    //                         },
    //                         {
    //                             path: 'menu1-2-2'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     path: 'menu1-3'
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'menu2'
    //         }
    //     ]
    // },
    // {
    //     path: 'external-link',
    //     children: [
    //         {
    //             path: 'https://panjiachen.github.io/vue-element-admin-site/#/'
    //         }
    //     ]
    // }
  ],
  editor: [
    {
      path: '/',
      children: [
          {
              path: 'dashboard'
          }
      ]
    },
    {
      path: '/search',
      children: [
          {
              path: 'search'
          },
      ]
  },
  //   {
  //     path: '/example',
  //     children: [
  //         {
  //             path: 'table'
  //         },
  //         {
  //             path: 'tree'
  //         }
  //     ]
  // },
  ]
}

// 模拟数据用户信息
const usersInfo = {
  admin: {
    nickname: 'admin',
    portrait: 'https://seatmeat.oss-cn-shanghai.aliyuncs.com/BiaoZhu/boy.png'
  },
  editor: {
    nickname: 'editor',
    portrait: 'https://seatmeat.oss-cn-shanghai.aliyuncs.com/BiaoZhu/girl.png'
  }
}

export function login(data) {
  // 模拟后台返回数据
  return new Promise(resolve => resolve(
    {
      msg: 'ok',
      token: usersInfo[data.username] && data.username
    }
  ))
  // return request({
  // url:'CodeRepository/login',
  //  // url: '/users/login',
  //   method: 'post',
  //   data
  // })
}

export function getInfo(username) {
  // 模拟后台返回数据
  return new Promise(resolve => resolve(
    {
      userInfo: usersInfo[username],
      routesMap: routesMaps[username]
    }
  ))
  // return request({
  // url:'CodeRepository/login',
  // //   url: '/users/userinfo',
  //   method: 'get'
  // })
}

export function logout() {
// 模拟异步行为，或者在需要返回一个Promise对象但实际上没有异步操作要执行时使用。
  return new Promise(resolve => resolve())
  // return request({
  // url:'CodeRepository/login',
  // //   url: '/users/logout',
  //   method: 'post'
  // })
}
