// 用于获取页面的标题

import defaultSettings from '@/settings'

// 如果找不到defaultSettings，则使用字符串 "Vue Admin Template" 作为默认标题。
const title = defaultSettings.title || 'Code-System'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    // 将 pageTitle 和默认标题以 "-" 分隔的方式进行拼接，并返回新的标题字符串
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}