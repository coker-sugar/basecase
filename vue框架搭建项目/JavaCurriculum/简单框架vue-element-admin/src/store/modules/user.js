import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // 解构赋值从`userInfo`中获取`username`和`password`
    const { username, password } = userInfo
    // 返回一个Promise对象，该对象在异步操作完成后被解析
    return new Promise((resolve, reject) => {
      // 向服务器发送登录请求
      login({ username: username.trim(), password: password }).then(response => {
        // 服务器响应,返回包含token
        if (response.token) {
          // 将token存在token中
          // Cookies.set('Token', response.token)
          commit('SET_TOKEN', response.token)
          // token保存在本地
          setToken(response.token)
          // 解析Promise对象以表示登录成功
          resolve()
        } else {
          // 不包含token,显示错误信息
          Message({
            message: '账号或密码错误',
            type: 'error',
            duration: 5 * 1000
          })
          // 拒绝（reject）这个Promise对象以表示登录失败
          reject()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo({ commit, state }) {
    // 返回一个Promise对象，在异步操作完成后被解析。
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        // 返回的数据中不包含`userInfo`，则拒绝Promise对象并返回错误消息。
        if (!response.userInfo) {
          return reject('验证失败，请重新登录')
        }

        const { userInfo, routesMap } = response

        commit('SET_NAME', userInfo.nickname)
        commit('SET_AVATAR', userInfo.portrait)
        resolve(routesMap)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    // 返回一个Promise对象，在异步操作完成后被解析
    return new Promise((resolve, reject) => {
      // 向服务器发送注销请求，传递当前状态（state）中的token。
      logout(state.token).then(async() => {
        // 在注销成功之前，首先移除本地保存的token
        removeToken() // must remove  token  first
        // 重置路由
        resetRouter()
        // 重置状态
        commit('RESET_STATE')
        // 调用`permission`模块的`resetState`,重置权限相关的状态
        await dispatch('permission/resetState', {}, {root: true})
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    // 返回一个Promise对象，在异步操作完成后被解析。
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}