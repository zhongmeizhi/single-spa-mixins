const webpack = require('webpack');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vConsolePlugin = require('vconsole-webpack-plugin');
const baseConf = require('./webpack.config.base');
const config = require("./config/index.js");

const { LIBRARY } = config;

module.exports = merge(baseConf, {
  entry: {
    app: 'src/main.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: `${LIBRARY}/js/[name].js`,
  },
  mode: 'development',
  devServer: { // 决定
    clientLogLevel: 'warning',
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
    //   ],
    // },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    // host: 'localhost',
    // port: 8006,
    open: true,
    overlay: {warnings: false, errors: true },
    // publicPath: '/',
    // proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      // poll: config.dev.poll,
    },
    disableHostCheck: true, // 允许绑定host域名调试
    // 本地 mock数据
    before(app) {
      console.log('开发环境运行')
      // apiMocker(app, path.resolve('./mock/index.js'))
    }
  },
  plugins: [
    new vConsolePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
})