/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
// 判断给定的路径path是否属于外部链接
export function isExternal(path) {
  // 返回一个布尔值，路径应当以"http:"、"https:"、"mailto:"或者"tel:"开头，是则返回true
  return /^(https?:|mailto:|tel:)/.test(path)
}
// - "http:"和"https:"指示http和https协议的链接
// - "mailto:"指示电子邮件地址
// - "tel:"指示电话号码

// /**
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validUsername(str) {
//   const valid_map = ['admin', 'editor']
//   return valid_map.indexOf(str.trim()) >= 0
// }
