const merge = require("webpack-merge");
const path = require('path');
const baseConf = require('./webpack.config.base');
const defineConfig = require("./config/index.js");

const { LIBRARY } = defineConfig;

module.exports = merge(baseConf, {
  entry: {
    micro: 'src/micro.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: `/${LIBRARY}/`,
    path: path.resolve(__dirname, '../dist', LIBRARY),
    libraryTarget: 'umd',
    library: LIBRARY
  },
  // externals: ['vue', 'vue-router'],
  plugins: [
  ],
})