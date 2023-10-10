// 预览vue.js项目的构建结果
const { run } = require('runjs') // 运行命令行命令
const chalk = require('chalk') // 美化命令行输出
const config = require('../vue.config.js') // 获取vue项目的配置信息
const rawArgv = process.argv.slice(2)  // 获取node.js执行路径,再获得传递给脚本的命令行参数,再从第三个元素截取,去除执行路径和脚本文件路径
const args = rawArgv.join(' ') // 将数组以空格分隔符连接

if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')
  // 构建vue项目
  run(`vue-cli-service build ${args}`)

  // 设置端口号为9526
  const port = 9526
  // 配置publicPath
  const publicPath = config.publicPath

  // 构建静态文件服务器
  // require引入connect和serve-static模块
  var connect = require('connect')
  var serveStatic = require('serve-static')
  // 创建connect实例
  const app = connect()

  app.use(
    // 公共路径publicPath
    publicPath,
    // 指定静态文件的路径'./dist',设置默认的索引文件'index.html',如果访问的路径是'/',则使用index.html为默认文件
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )

// 启动一个Web服务器并运行Vue.js应用程序
// 如果命令行参数中包含“serve”，则使用“vue-cli-service serve”命令启动开发服务器。
// 否则，使用“vue-cli-service build”命令生成静态文件。这里用到了chalk模块来输出带颜色的日志信息。
// 如果report参数为true，则在控制台输出报告的URL地址。最后，使用“app.listen()”方法启动Web服务器并监听指定端口。
  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }

  })
} else {
  run(`vue-cli-service build ${args}`)
}
