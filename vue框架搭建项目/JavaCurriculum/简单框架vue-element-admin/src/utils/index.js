/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */

// 将时间戳转换为指定格式的时间字符串
export function parseTime(time, cFormat) {
  // time 待转换的时间戳，cFormat 一个自定义的输出时间格式
  if (arguments.length === 0 || !time) {
    return null
  }
  // 存储最终输出的时间格式。如果传入了 cFormat 参数，则使用传入的格式，否则使用默认格式。
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  // time 如果是对象类型，则直接使用该对象作为 date 变量；
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      // 如果 time 是纯数字字符串，则将其转换为整数类型；
      if ((/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      } else {
        // 如果 time 是字符串类型，并且包含连字符(-)，则将连字符替换为斜杠(/)。
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    // time 如果是 10 位数字，乘以 1000 转换为 13 位时间戳。
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    // 使用 date 对象获取年、月、日、时、分、秒和周几信息
    date = new Date(time)
  }
  
// 通过 formatObj 存储。
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // 如果标记是 'a'，表示需要返回星期几，那么根据给定的值在数组 ['日', '一', '二', '三', '四', '五', '六'] 中选取对应的值进行返回；
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    // 其它标记类型则将值转换成字符串并在前面补零，保证输出的格式一致性。
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */

// 格式化时间的函数
export function formatTime(time, option) {
  // 如果输入的时间参数长度为10，将其转换为以毫秒为单位的时间戳；
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    // 否则，直接将时间参数转为数值类型。
    time = +time
  }
// 接下来获取当前时间的时间戳
  const d = new Date(time)
  const now = Date.now()
  // 计算出当前时间与输入时间的差值（单位为秒）。
  const diff = (now - d) / 1000

// 根据差值的大小，返回相应的时间格式字符串：
  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  // - 如果设置了option参数，则调用parseTime函数将时间参数按照该option格式进行解析并返回；
  if (option) {
    return parseTime(time, option)
  } else {
    // 否则，返回月份、日期、小时和分钟的字符串拼接。
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
/**
 * @param {string} url
 * @returns {Object}
 */

// 将给定的《URL》中的查询参数部分《解析》为一个包含参数名和参数值的《对象》，并且适用于大多数URL格式。
export function param2Obj(url) {
  // 利用decodeURIComponent对url解码
  // 使用split('?')方法将URL按照问号进行分割，提取出查询参数部分
  // /\+/g将查询字符串中的加号替换为空格
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  // split('&')方法将查询参数字符串按照&符号进行分割，得到一个包含多个键值对的数组searchArr。
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    // 找到等号的位置索引
    const index = v.indexOf('=')
    if (index !== -1) {
      // 等号之前的部分作为参数名name
      const name = v.substring(0, index)
      // 等号之后的部分作为参数值val。
      const val = v.substring(index + 1, v.length)
      // 键值对的形式保存到对象obj中
      obj[name] = val
    }
  })
  return obj
}