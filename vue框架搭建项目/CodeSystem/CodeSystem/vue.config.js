'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave:false,
  devServer: {
    // 本地配置
    proxy: {
      '/api': {
        target: "http://10.100.233.135:8080",
        changeOrigin: true, // 允许跨域
        pathRewrite: { 
          '^/api': '',
        }
      },
    }
  },
  // devServer: {
  //   port: 8888,
  //   open: true,
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  
}
