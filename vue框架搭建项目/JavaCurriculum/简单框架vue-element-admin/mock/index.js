// 导入mockjs库,可以使用其中各种方法来生成模拟数据
const Mock = require('mockjs')
// 导入了`param2Obj`函数
const { param2Obj } = require('./utils')

// 导入api
const user = require('./user')
const table = require('./table')

// 两个配置合并成一个数组，并存储在名为`mocks`的常量
const mocks = [
  ...user,
  ...table
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).

// 模拟《XMLHttpRequest（XHR）的功能》
function mockXHR() {
  // 替换了原本的send方法
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      // 设置了withCredentials属性
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        // 设置responseType属性
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }
  // 将options参数转换为符合Express框架要求的请求对象
  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      // 如果respond是一个函数类型，则从options中获取body、type和url等属性。
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      // 对result进行模拟，并返回模拟结果。
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

module.exports = {
  mocks,
  mockXHR
}

