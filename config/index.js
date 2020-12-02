'use strict'
// Template version: 1.2.4
// see http://vuejs-templates.github.io/webpack for documentation.
const ipFile = require('../build/ip')
const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // 各种开发服务器设置
    host: ipFile.getIp(), // 可以被process.env.HOST覆盖
    // host: "localhost", // 可以被process.env.HOST覆盖
    port: 8080, // 可以被process.env.PORT覆盖，如果正在使用端口，则将确定一个空闲端口
    autoOpenBrowser: true,//自动打开网址
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 使用Eslint加载程序？
    // 如果为true，则在捆绑过程中将删除您的代码，并且删除错误，并且警告将显示在控制台中。
    useEslint: false,
    // 如果为true，则在浏览器的错误叠加窗口中还将显示错误和警告。
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // 如果在devtools中调试vue文件时遇到问题，请将其设置为false-可能会有所帮助
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
  
}