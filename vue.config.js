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
  devServer: {},
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `
          @import "~@/assets/styles/variables.scss";
          @import "~@/assets/styles/globals.scss";
        `,
      }
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}