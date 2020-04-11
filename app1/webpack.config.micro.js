const webpack = require('webpack');
const merge = require("webpack-merge");
const baseConf = require('./webpack.config.base');
const config = require("./config/index.js");

const { LIBRARY } = config;

module.exports = merge(baseConf, {
  entry: {
    micro: 'src/micro.js'
  },
  output: {
    // filename: `${LIBRARY}/[name].js`,
    filename: `[name].js`,
    libraryTarget: 'umd',
    library: LIBRARY
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})