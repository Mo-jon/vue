// vue.config.js
var path = require('path');
console.log(
  '[config]:', path.resolve(__dirname, 'vue.config.js'),
  '[env]:', process.env.NODE_ENV,
  '[serve]:', process.env.VUE_APP_SERVE
)

module.exports = {
  publicPath: './', // 相对于 HTML 页面（目录相同）
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV == 'development',
  devServer: {},
  css: {
    loaderOptions: {
      sass: {
        // 全局sass变量
        prependData: `
          @import "~@/assets/styles/variables.scss";
        `,
      }
    }
  },
  configureWebpack: (config) => {
    console.log('configureWebpack', config);
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // 去掉console.log()
    } else {
      // 为开发环境修改配置...
    }
  },
}