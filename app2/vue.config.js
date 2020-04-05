const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../dist/app2'),
  chainWebpack: config => {
    console.log(process.env.NODE_ENV, 'NODE_ENV')
    if (process.env.NODE_ENV === 'micro') {
      config.output.libraryTarget('umd');
      config.output.library('app2');
      // config.externals(['vue', 'vue-router'])
    }
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name].js`)
    }
  },
  filenameHashing: false
}
