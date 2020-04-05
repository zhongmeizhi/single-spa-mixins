const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const library = 'app1';

module.exports = {
  entry: {
    micro: 'src/micro.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist', library),
    libraryTarget: 'umd',
    library: library
  },
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
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: `/${library}/`,
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
    new VueLoaderPlugin()
  ],
};
