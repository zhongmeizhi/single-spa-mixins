const webpack = require('webpack');
const merge = require("webpack-merge");
const baseConf = require('./webpack.config.base');
const config = require("./config/index.js");

const { LIBRARY } = config;

/* 
  微服务通过代理，需要更改文件路径
  用文件配置的加载路径，替换打包使用的 publicPath

*/

module.exports = merge(baseConf, {
  entry: {
    micro: 'src/micro.js'
  },
  output: {
    filename: `${LIBRARY}/[name].js`,
    publicPath: '/',
    libraryTarget: 'umd',
    library: LIBRARY
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: LIBRARY +'/'+ '[name].[ext]?[hash]',
        }
      },
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})