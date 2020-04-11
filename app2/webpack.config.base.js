const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const defineConfig = require("./config/index.js");

const { LIBRARY } = defineConfig;

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: `/${LIBRARY}/`,
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [
      ".js", ".vue"
    ],
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  mode: 'development',
  devtool: 'none',
  externals: [
  ],
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      $define: defineConfig.define
    }),
  ],
};
