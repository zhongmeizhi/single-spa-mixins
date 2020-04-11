const webpack = require('webpack');
const merge = require("webpack-merge");
const baseConf = require('./webpack.config.base');
const defineConfig = require("./config/index.js");

const { LIBRARY } = defineConfig;

module.exports = merge(baseConf, {
  entry: {
    micro: 'src/micro.js'
  },
  output: {
    filename: `[name].js`,
    // chunkFilename: `${LIBRARY}/[name].js`,
    publicPath: '/',
    libraryTarget: 'umd',
    library: LIBRARY
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})