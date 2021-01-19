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
  devServer: {
    // 自动打开
    open: true,
    // 代理转发
    proxy: {
      '/baidu': {
        target: 'http://localhost:3000', // 反向代理地址
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': ''
        },
        // 设置host
        router: {
          'localhost:8081': 'http://localhost:3000',
        },
        // 设置response header
        onProxyRes: function (proxyRes) {
          console.log("设置response header");
          proxyRes.headers['proxyResponse'] = 'proxy_response_header';
        },
        // 设置request header
        onProxyReq: function (proxyReq) {
          console.log("设置request header");
          proxyReq.setHeader('proxyRequest', 'proxy_request_header');
        }
      }
    },
  },
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
    // console.log('configureWebpack', config);
    if (config.mode === 'production') {
      // 为生产环境修改配置...
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // 去掉console.log()
    } else {
      // 为开发环境修改配置...
    }
  },
}