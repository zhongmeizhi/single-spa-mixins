const path = require('path');

// const isMicro = process.env.NODE_ENV === 'micro';

module.exports = {
  outputDir: path.resolve(__dirname, '../dist/app1'),
  // pages: {
  //   index: {
  //     entry: isMicro ? 'src/micro.js' : 'src/main.js'
  //   }
  // },
  chainWebpack: config => {
    console.log(process.env.NODE_ENV, 'NODE_ENV')
    // if (isMicro) {
    //   config.output.libraryTarget('umd');
    //   config.output.library('app1');
    // }
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`)
    } else {
      config.externals(['vue', 'vue-router'])
    }
  },
  filenameHashing: false
}
